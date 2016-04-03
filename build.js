const fs            = require('fs');
const cheerio       = require('cheerio');
const mkdirp        = require('mkdirp');
const path          = require('path');
const _             = require('lodash');
const episodes      = require('./content/episodes.json');
const panelists     = require('./content/panelists.json');
const doc           = '<!DOCTYPE html>\n<html>';
const homePage      = 'index.html';
const currentTitles = [];
var output;

// read homepage
const page = fs.readFileSync('./index.html', 'utf8' );

// read episode
const epPage = fs.readFileSync('./episode.html', 'utf8' );

// contains prototype
Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

episodeContent();

// get episode json content
function episodeContent(){

    const $ = cheerio.load(page);
    const ep = cheerio.load(page);

    //just redo the episodes every time
    $('.episodes ol li').remove();

    var panel;

    for(var i = episodes.length - 1; i >= 0; i--) {
      var epTitle = episodes[i].title;
      panel = episodes[i].panel;
        var epDate = episodes[i].published;
        var epDesc = episodes[i].description;
        var link = epTitle.replace(/ /g, '-').toLowerCase();
        var id = episodes[i].id;
        var picks = episodes[i].picks;
        var links = episodes[i].links;
        var guests = episodes[i].guests;

        // create list of episodes on the homepage
        $('.episodes ol').prepend(
          `<li><a href="episodes/${link}/"><h3>${epTitle}</h3>` +
          `<time>${epDate}</time>` +
          `<p>${epDesc}</p>` +
          `</a></li>`
        );

        // create html page for new episode
        // create new Title
        ep('title').html(epTitle + ' - Front End Happy Hour');

        // create new page description
        ep('meta[name=description]').attr('content', epDesc);

        //update CSS to episode css
        ep('link[href="public/css/style.css"]').attr('href','../../public/css/episode.css');

        ep('img').each(function() {
          if(ep(this).attr('src').indexOf('../../') === -1){
            ep(this).attr('src', '../../' + ep(this).attr('src'));
          }
        });

        // add episode content info
        ep('.episodes').html(
          `<h2>${epTitle}</h2>` +
          `<time>Published ${epDate}</time>` +
          `<div class="audio">` +
          `<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>` +
          `</div>` +
          `<p>${epDesc}</p>`
        );

        if(guests.length !== 0){
          var guestList = '';
          for(var b = 0; b < guests.length; b++) {
            guestList += '<li>' +
            '<a href="https://twitter.com/' + guests[b].twitter + '">' + guests[b].name + '</a>' +
            '</li>'
          }
          ep('.episodes').append(
            '<div class="guests picks">' +
            '<h3>Guests</h3>' +
            '<ul>' + guestList +
            '</ul>' +
            '</div>'
          );
        }

        if(links.length !== 0){
          var linkContent = '';
          for(var b = 0; b < links.length; b++) {
            linkContent += '<a href="' + links[b].url + '">' + links[b].title + '</a>';
            if(b !== links.length -1){
              linkContent += ', ';
            }
          }
          ep('.episodes').append(
            '<div class="links picks">' +
            '<h3>Items mentioned in the episode</h3>' +
            '<p>' + linkContent +
            '</p>' +
            '</div>'
          );          
        }

        // if picks add picks
        if(picks.length !== 0){
          var picksContent = '';
          for(var a = 0; a < picks.length; a++) {
            picksContent += '<li>' +
              '<a href="' + picks[a].url + '">' + picks[a].title + '</a>' + ' - ' + picks[a].from +
              '</li>'
          }

          ep('.episodes').append(
            '<div class="picks">' +
            '<h3>Picks</h3>' +
            '<ul>' + picksContent +
            '</ul>' +
            '</div>' +
            '<div class="panel">' +
            '<h3>Panel</h3>' +
            '<ul>' +
            '</ul>' +
            '</div>'
          );
        }

        for(var x = 0; x < panelists.length; x++) {
            if(panel.contains(panelists[x].name)){
              var name = panelists[x].name;
              var pic = panelists[x].profile_pic;
              var picMarkup = '';
              var twitter = panelists[x].twitter;

              if( _.startsWith( pic, 'http') || _.startsWith( pic, '/' )){
                pickMarkup = `<img src="../../public${pic}" alt="${name} profile picture" />`;
              }
              else{
                pickMarkup = `<img src="https://avatars0.githubusercontent.com/u/${pic}?v=3&s=150" alt="${name} profile picture">`;
              }

              ep('.panel ul').append(
                `<li>${pickMarkup}` +
                `<span class="name">${name}</span>` +
                `<a href="https://twitter.com/${twitter}" class="twitter">@${twitter}</a>` +
                `</li>`
              );
            }
          }

          var newEpOutput = doc + ep('html').html() + '</html>';

          mkdirp.sync( `./episodes/${link}` );

          fs.writeFileSync(`./episodes/${link}/index.html`, newEpOutput);
    }

    output = doc + $('html').html() + '</html>';

    fs.writeFile(homePage, output, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('Updated ' + homePage);
      }
    });
}
