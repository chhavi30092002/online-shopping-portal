nav = $('#nav');
$body = $('body');
$banner = $('#banner');
$document = $('document');

isIndex = $body.prop('id') === 'index';
isHelp = $body.prop('id') === 'help';
indexCheckout = $('.checkout-card')[0];
indexSdk = $('.sdk-card')[0];
fixedNav = $('.fixed-nav');
fixedArea = fixedNav.length && $('.fixed-box')[0];
paymentsforanim = !isIndex;

isMobile =
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  );

transformProp = function() {
  var prop;
  if (Array.prototype.some)
    [
      'transform',
      'WebkitTransform',
      'MozTransform',
      'OTransform'
    ].some(function(i) {
      if (typeof document.head.style[i] === 'string') {
        prop = i;
        return true;
      }
    });
  return prop;
};

if (isIndex) {
  var eventNames = isMobile ? 'click' : 'click mouseover';

  $('.person').on(eventNames, function(event) {
    $(this).addClass('active').siblings().removeClass('active');
    $($('.quote')[$(this).index()])
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
}

function scrollHandler() {
  if (isIndex) {
    if (
      indexCheckout &&
      indexCheckout.getBoundingClientRect().top < innerHeight * 0.7
    ) {
      $(indexCheckout).addClass('loaded');
      indexCheckout = false;
    }
    if (indexSdk && indexSdk.getBoundingClientRect().top < innerHeight * 0.7) {
      $(indexSdk).addClass('loaded');
      indexSdk = false;
    }
  } else if (fixedNav.length) {
    fixedNav[
      fixedArea.getBoundingClientRect().top < 60 ? 'addClass' : 'removeClass'
    ]('fixed');
  }
}

$(window).scroll(scrollHandler);

$('.api-tabs').on('click', '.tab:not(.active)', function() {
  $this = $(this);
  $this.siblings().removeClass('active');
  index = $this.addClass('active').index();
  $($('.snipette')[index]).addClass('active').siblings().removeClass('active');
});

scrollHandler();

function SecurityPopUp(e) {
  window.open(
    e,
    'win',
    'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=700,height=585'
  ), (self.name = 'mainWin');
}
$('#live-chat').click(function() {
  SupportKit.open();
});

$('#contactform').submit(function(e) {
  var button = $(this).find('button');
  var parent = $(this);
  button.attr('disabled', 'true').html('Please wait...');
  $.ajax({
    method: 'post',
    url: this.action,
    data: $(this).serialize(),
    complete: function() {
      $('#contactform')[0].reset();
      button.removeAttr('disabled').html('Submit');
      submissionInfo(parent, 'Your message has been submitted.');
      parent.find('#submit-info').removeClass('hide');
      parent.find('#submit-info').fadeIn('fast');
    }
  });
  return false;
});

$('#jobsform').submit(function(e) {
  var button = $(this).find('button');
  var parent = $(this);
  button.attr('disabled', 'true').html('Please Wait...');
  $.ajax({
    method: 'get',
    url: this.action,
    data: $(this).serialize(),
    complete: function(r) {
      button.removeAttr('disabled').html('Submit');
      if (r.responseJSON === undefined) {
        submissionInfo(
          parent,
          'There was an error, please check your internet.'
        );
      } else if (r.responseJSON.status === 'success') {
        parent[0].reset();
        submissionInfo(
          parent,
          'Your message has been submitted, please check your email.'
        );
      } else {
        submissionInfo(parent, 'There was an error in submitting your message');
      }
    }
  });
  return false;
});

function submissionInfo(parent, msg) {
  parent.find('#submit-info').html(msg);
}

function setRef() {
  var query = location.search.match(/ref=[^&]+/);
  if (query) {
    localStorage.setItem('razorpay_ref', query[0].split('=')[1]);
  }
}
try {
  setRef();
} catch (e) {}

var ref = localStorage.getItem('razorpay_ref');

if (ref) {
  $(document).on('click', 'a', function(e) {
    if (this.href.indexOf('dashboard.razorpay.com') > 0) {
      e.preventDefault();
      window.location.href = this.href + '?ref=' + ref;
    }
  });
}

function appendBlankImage(src) {
  $('<img>')
    .attr({
      height: 1,
      width: 1,
      style: 'display: none',
      src: src
    })
    .appendTo('body');
}

function getUrlParam(name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(
    window.location.href
  );

  if (results === null) {
    return null;
  } else {
    return results[1] || 0;
  }
}

// Taken from https://remysharp.com/2010/07/21/throttling-function-calls
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function() {
    var context = scope || this;

    var now = +new Date(), args = arguments;

    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

// Feature section on home

if (isIndex && !window.matchMedia('(max-width: 700px)').matches) {
  $('.feature-section').on('mouseover', function() {
    var $el = $(this);

    $('.feature-section').removeClass('active');
    $el.addClass('active');

    var image_index = $el.data('image-index');
    $('.image-container.slideshow img').addClass('no-show');
    $('.image-container.slideshow img:eq(' + image_index + ')').removeClass(
      'no-show'
    );
  });

  // Load all images for faster perception of the transition
  var images = [
    '/images/features/payment_modes.png',
    '/images/features/auto_updating.gif',
    '/images/features/card_saving.png',
    '/images/features/autofill_otp.png'
  ];

  images.forEach(function(image, index) {
    var img = document.createElement('img');
    img.setAttribute('src', image);

    if (index > 0) img.setAttribute('class', 'no-show');

    document.querySelector('.image-container.slideshow').appendChild(img);
  });
}

function showModal(modalContainer) {
  var $modalContainer = $(modalContainer);
  $('body').append('<div class="overlay" id="modal-overlay"></div>');
  var $overlay = $('#modal-overlay');

  $overlay.fadeIn();
  $modalContainer
    .show(300, function() {
      $modalContainer.addClass('show');
    })
    .on('click', function(event) {
      var target = event.target;
      if (
        target === $modalContainer[0] ||
        $(target).closest($(this).find('.close')).length
      ) {
        hideModal($modalContainer, $overlay);
      }
    });
}

function hideModal($modalContainer, $overlay) {
  $overlay.fadeOut('fast', function() {
    $(this).remove();
  });
  $modalContainer.off('click').removeClass('show').hide(300);
}

function showFlashMsg() {
  var pathname = window.location.pathname;
  if (getUrlParam('subscribed') === 'true') {
    $('#access-list').css('opacity', 1);
    window.history.replaceState({ urlPath: pathname }, '', pathname);
    setTimeout(function() {
      $('#access-list').css('opacity', 0);
    }, 10000);
  }
}

goog_snippet_vars = function() {
  var w = window;
  w.google_conversion_id = 928471290;
  w.google_conversion_label = 'Hq25CNOYtXQQ-rHdugM';
  w.google_remarketing_only = false;
};

goog_report_conversion = function(url) {
  goog_snippet_vars();
  window.google_conversion_format = '3';
  var opt = new Object();
  opt.onload_callback = function() {
    if (url) {
      window.location = url;
    }
  };
  var conv_handler = window['google_trackConversion'];
  if (typeof conv_handler == 'function') {
    conv_handler(opt);
  } else {
    // adblock
    opt.onload_callback();
  }
};

/* Analytics Code */

var _rzpAQ = [];
function emptyRzpAQ() {
  if (typeof ga === 'undefined' || (_rzpAQ && _rzpAQ.length === 0)) return;
  var q = [].concat(_rzpAQ);
  _rzpAQ = [];
  if (q.length > 0) {
    for (var i = 0; i < q.length; i++) {
      window.rzpAnalytics(q[i]);
    }
  }
}
var _qChckr = setInterval(emptyRzpAQ, 500);

/**
 * Method to track Google Analytics
 * @param {Object} eventData Data of the event
 * @param {Function} cb Callback
 */
window.rzpAnalytics = function(data, cb = function() {}) {
  // If there's no data, don't track anything
  if (!data) {
    cb(data);
    return;
  }

  // If ga is undefined, push to queue
  if (typeof ga === 'undefined') {
    _rzpAQ.push(data);
    cb(data);
    return;
  }

  // `ga` exists now, empty the queue.
  clearInterval(_qChckr);
  emptyRzpAQ();

  // Check if GA is noop.
  if (ga.hasOwnProperty('length') && ga.length === 0) {
    cb(data);
  }

  switch (data.name) {
    case 'set_dimensions': // Set the dimensions
      ga('set', data.dimensions);
      ga('old.set', data.dimensions);
      break;
    default:
      ga(
        'send',
        'event',
        data.eventCategory || window._eventCategory,
        data.eventAction || undefined,
        data.eventLabel || undefined,
        data.eventValue || undefined,
        {
          hitCallback: function() {
            cb(data);
          }
        }
      );
      ga(
        'old.send',
        'event',
        data.eventCategory || window._eventCategory,
        data.eventAction || undefined,
        data.eventLabel || undefined,
        data.eventValue || undefined,
        {
          hitCallback: function() {
            cb(data);
          }
        }
      );
  }
};

var prodUrl = 'razorpay.com';

var setupChatBotGA = function() {
  var chatBubble = function() { return document.querySelector(".mobile-chat-container"); };
  var closeChatButton = function() { return document.querySelector(".chat-header li[title=Close]"); };

  invokeWhenTrue(chatBubble, function() {
    chatBubble().addEventListener("click", function() {
      window.rzpAnalytics({
        eventCategory: 'Website - ChatBot',
        eventAction: 'Click - Open'
      });
    });
  });

  invokeWhenTrue(closeChatButton, function() {
    closeChatButton().addEventListener("click", function() {
      window.rzpAnalytics({
        eventCategory: 'Website - ChatBot',
        eventAction: 'Click - Close'
      });
    });
  });
};

/**
 * Executes a function once when a condition is true. Calls `condition` every `interval` milliseconds until it returns true, for a maximum of `maxTries` tries.
 *
 * @param {Function} condition A function that returns a Truthy/Falsy value
 * @param {Function} fn Function to be invoked
 * @param {Number} maxTries Maximum no. of tries
 * @param {Number} interval Interval in ms
 */
var invokeWhenTrue = (condition, fn, maxTries = 3, interval = 1000) => {
  let tries = 0;
  let currentTimeout = 0;

  var exec = () => {
    tries++;

    if (tries >= maxTries) {
      clearTimeout(currentTimeout);
      return;
    }

    if (condition()) {
      clearTimeout(currentTimeout);
      fn();
    } else {
      currentTimeout = setTimeout(exec, interval);
    }
  };

  exec();
};

if (location.hostname === prodUrl) {
  var initFn = function(d, w, c) {
    if (!d.getElementById("spd-busns-spt")) {
      var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script");
      var loaded = false;
      s.id = "spd-busns-spt";
      s.async = "async";
      s.src = "https://cdn.freshbots.ai/assets/share/js/fbotsChat.min.js";
      s.setAttribute("data-prdct-hash", "72739a6abc259fc06bd3aae6d959178cf1ee37c7");
      s.setAttribute("data-region", "us");
      s.setAttribute("data-ext-client-id", "4cd328a801ff11e9b384024204f7674d");
      if (c) {
        s.onreadystatechange = s.onload = function() {
          if (!loaded) {
            c();
          }
          loaded = true;
        };
      }
      n.parentNode.insertBefore(s, n);
    }
  }.bind(null, document, window);
  if (!(window.DISABLE_CHATBOT)) {
    setTimeout(initFn, 0);
    setupChatBotGA();
  }
}

var fetchFreddyChatHistory = () => {
  var CHAT_MESSAGES_LIMIT = 120;

  var qs = function(selector, parent = document) {
    return parent.querySelector(selector);
  };

  var qsa = function(selector, parent = document) {
    var els = parent.querySelectorAll(selector);
    var a = [];
    for (let i = 0; i < els.length; i++) {
      a.push(els[i]);
    }
    return a;
  };

  var capitalizeFirstLetter = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  };

  var formatChatHistory = function(list) {
    if (list.length) {
      let out = "";
      list.forEach(function(item) {
        out += "<b>" + capitalizeFirstLetter(item[0]) + "</b>: " + item[1] + "\r\n";
      });
      return out;
    }
    return "";
  };

  var fetchChat = function(formatted = true) {
    var chatHistory = qs("div.chat-history ul.joe-message-list");
    var messageGroups = qsa(".joe-message-group", chatHistory);

    let author = "Bot";
    var chat = [];

    messageGroups.forEach(function(msg) {
      author = msg.getAttribute("author");
      if (author) {
        var li = qsa(".joe-clearfix", msg);
        if (li.length) {
          li.forEach(function(li) {
            var div = qsa(".joe-message > span", li);
            if (div.length) {
              div.forEach(function(span) {
                if (span) {
                  chat.push([author, span.innerText]);
                }
              });
            } else {
              chat.push([author, li.innerText]);
            }
          });
        }
      }
    });

    if (formatted) {
      return formatChatHistory(chat.slice(-CHAT_MESSAGES_LIMIT));
    }

    return chat;
  };

  try {
    return fetchChat();
  } catch (e) {}

  return '';
};

window.addEventListener('blur', function () {
  var chat = fetchFreddyChatHistory();
  if (chat.length < 10 || !(window.localStorage))
    return;

  var store = {
    history: fetchFreddyChatHistory(),
    consumed: false,
    created_at: Date.now()
  };

  window.localStorage.setItem('rzp-chat-history', JSON.stringify(store));
});

function help_hash(e) {
  if (typeof e !== 'string') {
    e = e.originalEvent.newURL.replace(/[^#]+/, '');
  }
  var activeLink;
  activeLink = fixedNav.find('a[href="' + e + '"]');
  if (activeLink.length) {
    fixedNav.find('.active').removeClass('active');
    activeLink.addClass('active');
  } else {
    activeLink = $('a[href="' + e + '"]');
    if (activeLink.length) {
      var name = activeLink
        .closest('.section')
        .find('a[name]:eq(0)')
        .attr('name');
      if (name) {
        help_hash('#' + name);
      }
    }
  }
}
if (isHelp) {
  var $sections = $('.section').toArray();
  var $navs = $('.fixed-nav li a');

  if (location.hash) {
    help_hash(location.hash);
  }

  $(window).on('hashchange', help_hash).on('scroll', function() {
    var curr_section;
    $sections.some(function(section) {
      var rect = section.getBoundingClientRect();
      if (rect.top > -100 && rect.top < innerHeight / 2) {
        curr_section = section;
        return true;
      }
    });
    curr_index = $sections.indexOf(curr_section);
    if (curr_index !== -1) {
      var curr_nav = $navs[curr_index];
      if (curr_nav) {
        $navs.removeClass('active');
        $(curr_nav).addClass('active');
      }
    }
  });
}

var OPEN_CLASS = 'opened';
var ACTIVE_CLASS = 'active';
var MOB_OPEN_CLASS = 'open-nav';
var $document = $(document);

function Navigation(selector) {
  this.parent = $(selector);
  this.boxProps = [];
  this.hltProps = []; // props for highlight
  this.previousIndex = -1;
  this.boxOffset = this.parent.find('.box').offset();
  this.hltOffset = this.parent.find('.highlight').offset();
  this.list = this.parent.find('.container > ul > li');
  this.mobile = false;
}

Navigation.prototype = {
  moveBox: function(props, animate) {
    if (this.mobile) {
      return;
    }

    var box = this.parent.find('.box');
    var offset = this.boxOffset;
    var transformStr = 'translate(' + (props.left - offset.left) + 'px, 0px) ';
    transformStr +=
      'scale(' + props.width / 100 + ', ' + props.height / 100 + ')';
    var transitionStr = animate ? '0.3s' : '';

    var styles = {
      transform: transformStr,
      transition: transitionStr
    };

    this.setStyles(box, styles);
    this.moveSub(props, animate);
  },

  setStyles: function(element, styles) {
    if (styles.transform) {
      styles.webkitTransform = styles.transform;
      styles.MozTransform = styles.transform;
      styles.msTransform = styles.transform;
      styles.OTransform = styles.transform;
    }
    if (styles.transition) {
      styles.webkitTransition = styles.transition;
      styles.MozTransition = styles.transition;
      styles.msTransition = styles.transition;
      styles.OTransition = styles.transition;
    }

    return element.css(styles);
  },

  moveSub: function(props, animate) {
    if (this.mobile) {
      return;
    }
    var self = this;
    var sub = self.list.find('.sub');

    sub.each(function(i, e) {
      var subinner = $(self.list[i]).find('.sub-inner');
      var offset = self.boxProps[i];
      var translateX = props.left - offset.left;
      var transformStr = 'translate(' + translateX + 'px, 0px) ';
      var transformStrRev = 'translate(' + -translateX + 'px, 0px)';
      var transitionStr = animate ? '0.3s' : '';

      var styles = {
        transform: transformStr,
        width: props.width,
        height: props.height,
        transition: transitionStr
      };
      self.setStyles($(e), styles);
    });
  },

  moveHlt: function(props, animate) {
    var hlt = this.parent.find('.highlight');
    var offset = this.hltOffset;
    var transformStr =
      'translate(' + Math.round(props.left - offset.left) + 'px, 0px)';
    var transitionStr = animate ? '0.3s' : '';

    var styles = {
      webkitTransform: transformStr,
      MozTransform: transformStr,
      msTransform: transformStr,
      OTransform: transformStr,
      transform: transformStr,
      width: props.width,
      height: props.height,
      webkitTransition: transitionStr,
      MozTransition: transitionStr,
      msTransition: transitionStr,
      OTransition: transitionStr,
      transition: transitionStr
    };

    hlt.css(styles);
  },

  openNav: function(index) {
    var list = this.list;
    var animateBox = true;
    var wasOpened = this.parent.hasClass(OPEN_CLASS);

    if (!wasOpened) {
      animateBox = false;
    }

    var transitionStr = animateBox ? '0.3s' : '';
    this.parent
      .addClass(OPEN_CLASS)
      .find('li.' + ACTIVE_CLASS)
      .removeClass(ACTIVE_CLASS);

    // this.list.removeAttr('style');

    $(list[index]).addClass(ACTIVE_CLASS).find('.sub').css({
      webkitTransform: 'translate(0,0)',
      MozTransform: 'translate(0,0)',
      msTransform: 'translate(0,0)',
      OTransform: 'translate(0,0)',
      transform: 'translate(0,0)',
      webkitTransition: transitionStr,
      MozTransition: transitionStr,
      msTransition: transitionStr,
      OTransition: transitionStr,
      transition: transitionStr
    });

    var sub = $(list[index]).find('.sub');
    if (!this.mobile) {
      sub
        .css('width', this.boxProps[index].width)
        .css('height', this.boxProps[index].height);
    } else {
      $(list[index]).css('max-height', sub.height() + 64 + 32);
    }
    this.boxProps[index].left = $(list[index]).offset().left;
    this.moveBox(this.boxProps[index], animateBox);
    // this.moveHlt(this.hltProps[index], animateBox);
    this.previousIndex = index;
  },

  closeNav: function() {
    this.parent
      .removeClass(OPEN_CLASS)
      .find('li.' + ACTIVE_CLASS)
      .removeClass(ACTIVE_CLASS);
    this.previousIndex = -1;
    this.list.removeAttr('style');
    this.list.find('.sub').removeAttr('style');
  },

  initBoxProps: function() {
    var self = this;

    self.boxProps = [];

    // init the dims and coords for all the subnavs
    self.parent.find('.container > ul > li .sub').each(function(k, v) {
      var $elem = $(v);
      var offset = $elem.offset();
      var props = {
        top: offset.top,
        left: offset.left,
        width: $elem.outerWidth() + 1,
        height: $elem.outerHeight()
      };
      self.boxProps.push(props);
    });
  },

  initStickyBehaviour: function() {
    var self = this;
    var stashedScrollPos = $document.scrollTop();
    var navHeight = this.mobile
      ? $('#nav-mob-logo').height()
      : this.parent.height();

    $(window).scroll(
      throttle(function(event) {
        var scrollPos = $document.scrollTop();

        if (scrollPos > navHeight) {
          if (scrollPos !== stashedScrollPos) {
            if (scrollPos > stashedScrollPos || scrollPos < navHeight) {
              self.parent
                .addClass('nav-affixed')
                .removeClass('nav-affixed-shown');
              $('#nav-mob-logo, #ham-menu')
                .addClass('nav-affixed')
                .removeClass('nav-affixed-shown');
              if (!self.mobile) {
                self.closeNav();
              }
            } else {
              self.parent.addClass('is-transitioning nav-affixed-shown');
              $('#nav-mob-logo, #ham-menu').addClass(
                'is-transitioning nav-affixed-shown'
              );
            }
          }
        } else {
          self.parent.removeClass(
            'nav-affixed is-transitioning nav-affixed-shown'
          );
          $('#nav-mob-logo, #ham-menu').removeClass(
            'nav-affixed is-transitioning nav-affixed-shown'
          );
        }

        stashedScrollPos = scrollPos;
      }, 100)
    );
  },

  initHltProps: function() {
    var self = this;

    self.hltProps = [];

    // init the dims and coords for all the subnavs
    self.list.each(function(k, v) {
      var $elem = $(v);
      var offset = $elem.offset();
      var props = {
        top: offset.top,
        left: offset.left,
        width: $elem.outerWidth(),
        height: $elem.outerHeight()
      };
      self.hltProps.push(props);
    });
  },

  init: function() {
    var self = this;

    this.initBoxProps();
    this.initStickyBehaviour();
    // this.initHltProps();

    // add event listeners to the nav items
    self.list
      .click(function(e) {
        if (!self.mobile) {
          return;
        }
        var $this = $(this);
        var index = self.list.index(this);

        if ($this.hasClass(ACTIVE_CLASS)) {
          if (!$(e.target).parents('.sub').length) {
            self.closeNav();
          }
        } else {
          self.openNav(index);
          $(window).on('mouseup', function(e) {
            if (!$(e.target).parents('#nav').length && e.target.id !== 'nav') {
              self.closeNav();
              $(window).off('mouseup');
            }
          });
        }
      })
      .mouseenter(function(e) {
        if (self.mobile) {
          return;
        }

        var $this = $(this);
        var index = self.list.index(this);

        self.openNav(index);
      });

    this.parent.mouseleave(function(e) {
      self.closeNav();
    });

    $('#ham-menu').click(function() {
      if ($('body').hasClass(MOB_OPEN_CLASS)) {
        self.closeMobileNav();
      } else {
        self.openMobileNav();
      }
    });
  },

  openMobileNav: function() {
    var self = this;
    $('body').addClass(MOB_OPEN_CLASS);
    $('body').on('mouseup', function(e) {
      if (e.target === document.body) {
        self.closeMobileNav();
        $('body').off('mouseup');
      }
    });
  },

  closeMobileNav: function() {
    $('body').removeClass(MOB_OPEN_CLASS);
  }
};

var nav = new Navigation('#nav');

$(window).ready(function() {
  nav.init();
  window.setTimeout(function() {
    nav.initBoxProps();
  }, 100);
});

$(window).on('resize', function() {
  nav.boxOffset = nav.parent.find('.box').removeAttr('style').offset();
  nav.parent.find('.sub').removeAttr('style');
  nav.closeNav();
  nav.initBoxProps();

  if (window.innerWidth < 1024) {
    nav.mobile = true;
  } else {
    nav.mobile = false;
  }
});

$(window).resize();

$('.signup-form').submit(function(e) {
  e.preventDefault();
  var emailField = $(this).find('input[name=email]');
  var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // TODO - Add CTA Logic

  if (!emailRegex.test(emailField.val())) {
    $(this).addClass('shake');
    (function(x) {
      window.setTimeout(function() {
        $(x).removeClass('shake');
      }, 820);
    })(this);
  } else {
    goog_report_conversion(
      $(this).attr('action') + '?email=' + encodeURIComponent(emailField.val())
    );

    // Fire linkedin Pixel.
    var i = new Image();
    i.src =
      'https://dc.ads.linkedin.com/collect/?pid=155571&conversionId=391812&fmt=gif';
  }

  return false;
});

function Slider(container) {
  if (!container) return;

  if (!(this instanceof Slider)) {
    return new Slider(container);
  }

  this.sliderContainer = $(container);
  this.sliderRow = this.sliderContainer.find('.slider-row');
  this.sliders = Array.prototype.slice.call(this.sliderRow.find('.slider'));

  this.sliderContainerWidth = this.sliderContainer.width();
  this.activeSlider = this.sliderRow.find('.active') || this.sliders[0];

  this.initialize();
}

Slider.prototype = {
  initialize: function() {
    this.sliderRow.width(9999); // Set some maximum width

    this.addDataIndexesToSliders();
    this.attachEventListener();

    this.makeActive(this.activeSlider);
    setTimeout(
      function() {
        this.sliderRow.css('transition', 'transform 300ms ease-out');
      }.bind(this)
    );
  },

  addDataIndexesToSliders: function() {
    this.sliders.forEach(function(slider, index) {
      slider.dataset.index = ++index;
    });
  },

  attachEventListener: function() {
    var self = this;
    this.sliderContainer.on('click', function(event) {
      var target = $(event.target);
      var closestSlider = $(target).closest('.slider');
      if (closestSlider.length) {
        self.makeActive(closestSlider);
      }
    });
  },

  destroy: function() {
    this.activeSlider = null;
    this.sliderContainer = null;
    this.sliderContainer.off('click');
  },

  makeActive: function(slider) {
    var previousActiveSlider = this.activeSlider;
    var previousActiveSliderIndex = this.activeSlider.data('index');
    var newSliderIndex = slider.data('index');

    previousActiveSlider.removeClass('active');

    var distanceFromFirstSlider = 0;
    for (var i = 0; i < newSliderIndex; i++) {
      if (i === newSliderIndex - 1) {
        distanceFromFirstSlider += $(this.sliders[i]).outerWidth(true) / 2;
      } else {
        distanceFromFirstSlider += $(this.sliders[i]).outerWidth(true);
      }
    }

    var transformDistance =
      this.sliderContainerWidth / 2 - distanceFromFirstSlider;
    this.sliderRow.css('transform', 'translateX(' + transformDistance + 'px)');
    slider.addClass('active');
    this.activeSlider = slider;
  }
};