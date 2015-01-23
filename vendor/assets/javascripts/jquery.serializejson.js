



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery.serializeJSON/jquery.serializejson.js at master · marioizquierdo/jquery.serializeJSON</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="marioizquierdo/jquery.serializeJSON" name="twitter:title" /><meta content="jquery.serializeJSON - Serialize an HTML Form to a JavaScript Object, supporting nested attributes and arrays." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/242139?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/242139?v=3&amp;s=400" property="og:image" /><meta content="marioizquierdo/jquery.serializeJSON" property="og:title" /><meta content="https://github.com/marioizquierdo/jquery.serializeJSON" property="og:url" /><meta content="jquery.serializeJSON - Serialize an HTML Form to a JavaScript Object, supporting nested attributes and arrays." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8EFF7286:1D6D:9EA92F5:54C29EE7" name="octolytics-dimension-request_id" /><meta content="8413177" name="octolytics-actor-id" /><meta content="pjpoole" name="octolytics-actor-login" /><meta content="a4e11c80e25684fd68e7ad9927f2b8cc1a621a34141ace0c6d7b34c5aa9d9cb6" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="9lWdnHyuzEkyuMmNjGAF0649nIzPfpjw0ZAas2LSy7H0/XP1MvFNYPPQI15vlMRYc/5lbNlREzTzC7Y4algTCg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-3b24b9ac37e087c9b13ad8d84820250a93a4fd610eb6e7535e8b12d0cb87836d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-0adb277c3e0f5609666d7512f78f267969a5308b562c1ff52296b9f0502ae547.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="596976bda9133448b226ab995e1baeb1">

      
  <meta name="description" content="jquery.serializeJSON - Serialize an HTML Form to a JavaScript Object, supporting nested attributes and arrays.">
  <meta name="go-import" content="github.com/marioizquierdo/jquery.serializeJSON git https://github.com/marioizquierdo/jquery.serializeJSON.git">

  <meta content="242139" name="octolytics-dimension-user_id" /><meta content="marioizquierdo" name="octolytics-dimension-user_login" /><meta content="5476727" name="octolytics-dimension-repository_id" /><meta content="marioizquierdo/jquery.serializeJSON" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5476727" name="octolytics-dimension-repository_network_root_id" /><meta content="marioizquierdo/jquery.serializeJSON" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/marioizquierdo/jquery.serializeJSON/commits/master.atom" rel="alternate" title="Recent Commits to jquery.serializeJSON:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/marioizquierdo/jquery.serializeJSON/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/marioizquierdo/jquery.serializeJSON/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/pjpoole" data-ga-click="Header, go to profile, text:username">
      <img alt="Peter Poole" class="avatar" data-user="8413177" height="20" src="https://avatars2.githubusercontent.com/u/8413177?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">pjpoole</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="marioizquierdo/jquery.serializeJSON">This repository</span>
    </li>
      <li>
        <a href="/marioizquierdo/jquery.serializeJSON/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uSBhRkx+qDBW6dnqqURgaaCnYT7f/kFTmPTKUsccRC530VDEyVgpRbVV8MpHitxg/FMNMKvzq7zCYZN6NPJ0Mg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="k/DeNJUXXKiweSWdjlAGMjh3+psp2Ss+ZyD+oYzm9I02dqt5eE34UL4BKH7ufdeXc/pbOiAti+KRVa+AEJMZDA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="5476727" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/marioizquierdo/jquery.serializeJSON/watchers">
        25
      </a>
      <a href="/marioizquierdo/jquery.serializeJSON/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/marioizquierdo/jquery.serializeJSON/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Feav2PhoL5XwP+mPSjXuHE6ekZC5mZ3eGSERLvQKXIR9DjUKzsDVFRQ9pGKE+FT+BebIroH4OQEAuW/T0wC2Sw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar marioizquierdo/jquery.serializeJSON">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/marioizquierdo/jquery.serializeJSON/stargazers">
          577
        </a>
</form>
    <form accept-charset="UTF-8" action="/marioizquierdo/jquery.serializeJSON/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mtb1FcFdhOo/gqJMq55ftPeLldcUV0FRucYQBRgnhQ3HeJZcKTeSpS93i8N2szKO+Kmyiys29Y2VGhrcH79gMg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star marioizquierdo/jquery.serializeJSON">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/marioizquierdo/jquery.serializeJSON/stargazers">
          577
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/marioizquierdo/jquery.serializeJSON/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of marioizquierdo/jquery.serializeJSON to your account" aria-label="Fork your own copy of marioizquierdo/jquery.serializeJSON to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/marioizquierdo/jquery.serializeJSON/network" class="social-count">94</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/marioizquierdo" class="url fn" itemprop="url" rel="author"><span itemprop="title">marioizquierdo</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/marioizquierdo/jquery.serializeJSON" class="js-current-repository" data-pjax="#js-repo-pjax-container">jquery.serializeJSON</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/marioizquierdo/jquery.serializeJSON/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/marioizquierdo/jquery.serializeJSON" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /marioizquierdo/jquery.serializeJSON">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/marioizquierdo/jquery.serializeJSON/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /marioizquierdo/jquery.serializeJSON/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/marioizquierdo/jquery.serializeJSON/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /marioizquierdo/jquery.serializeJSON/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/marioizquierdo/jquery.serializeJSON/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /marioizquierdo/jquery.serializeJSON/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/marioizquierdo/jquery.serializeJSON/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /marioizquierdo/jquery.serializeJSON/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/marioizquierdo/jquery.serializeJSON/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /marioizquierdo/jquery.serializeJSON/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/marioizquierdo/jquery.serializeJSON.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:marioizquierdo/jquery.serializeJSON.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/marioizquierdo/jquery.serializeJSON" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/marioizquierdo/jquery.serializeJSON" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save marioizquierdo/jquery.serializeJSON to your computer and use it in GitHub Desktop." aria-label="Save marioizquierdo/jquery.serializeJSON to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/marioizquierdo/jquery.serializeJSON/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of marioizquierdo/jquery.serializeJSON as a zip file"
                   title="Download the contents of marioizquierdo/jquery.serializeJSON as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/marioizquierdo/jquery.serializeJSON/blob/d90074ea9392b9477bcc6dbbed61e1ace554bbda/jquery.serializejson.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e5b70338d9f12a89adbfcdaf293b99db -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/blob/master/jquery.serializejson.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.4.1/jquery.serializejson.js"
                 data-name="2.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.1">2.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.4.0/jquery.serializejson.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.3.2/jquery.serializejson.js"
                 data-name="2.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.2">2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.3.1/jquery.serializejson.js"
                 data-name="2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.1">2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.3.0/jquery.serializejson.js"
                 data-name="2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.0">2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.2.0/jquery.serializejson.js"
                 data-name="2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0">2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.1.0/jquery.serializejson.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.0.0/jquery.serializejson.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.3.0/jquery.serializejson.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.3/jquery.serializejson.js"
                 data-name="1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.3">1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.2/jquery.serializejson.js"
                 data-name="1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.1/jquery.serializejson.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.0/jquery.serializejson.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.1.1/jquery.serializejson.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.1.0/jquery.serializejson.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.0.2/jquery.serializejson.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.0.1/jquery.serializejson.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.0.0/jquery.serializejson.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/marioizquierdo/jquery.serializeJSON/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/marioizquierdo/jquery.serializeJSON" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.serializeJSON</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.serializejson.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Mario Izquierdo" class="avatar" data-user="1399519" height="24" src="https://avatars3.githubusercontent.com/u/1399519?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/MarioLinden" rel="contributor">MarioLinden</a></span>
        <time datetime="2014-10-21T00:11:26Z" is="relative-time">Oct 20, 2014</time>
        <div class="commit-title">
            <a href="/marioizquierdo/jquery.serializeJSON/commit/d90074ea9392b9477bcc6dbbed61e1ace554bbda" class="message" data-pjax="true" title="Release 2.4.1">Release 2.4.1</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="MarioLinden" href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js?author=MarioLinden"><img alt="Mario Izquierdo" class="avatar" data-user="1399519" height="20" src="https://avatars1.githubusercontent.com/u/1399519?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="diaswrd" href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js?author=diaswrd"><img alt="William Dias" class="avatar" data-user="800417" height="20" src="https://avatars1.githubusercontent.com/u/800417?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="KATT" href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js?author=KATT"><img alt="Alex / Ajax" class="avatar" data-user="459267" height="20" src="https://avatars3.githubusercontent.com/u/459267?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mario Izquierdo" data-user="1399519" height="24" src="https://avatars3.githubusercontent.com/u/1399519?v=3&amp;s=48" width="24" />
            <a href="/MarioLinden">MarioLinden</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="William Dias" data-user="800417" height="24" src="https://avatars3.githubusercontent.com/u/800417?v=3&amp;s=48" width="24" />
            <a href="/diaswrd">diaswrd</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alex / Ajax" data-user="459267" height="24" src="https://avatars1.githubusercontent.com/u/459267?v=3&amp;s=48" width="24" />
            <a href="/KATT">KATT</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>234 lines (210 sloc)</span>
          <span class="meta-divider"></span>
        <span>11.771 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/marioizquierdo/jquery.serializeJSON/raw/master/jquery.serializejson.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/marioizquierdo/jquery.serializeJSON/blame/master/jquery.serializejson.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/marioizquierdo/jquery.serializeJSON?branch=master&amp;filepath=jquery.serializejson.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/marioizquierdo/jquery.serializeJSON/edit/master/jquery.serializejson.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/marioizquierdo/jquery.serializeJSON/delete/master/jquery.serializejson.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">  SerializeJSON jQuery plugin.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">  https://github.com/marioizquierdo/jquery.serializeJSON</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">  version 2.4.1 (Oct, 2014)</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c">  Copyright (c) 2014 Mario Izquierdo</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c">  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">  <span class="pl-s1"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">  <span class="pl-c">// jQuery(&#39;form&#39;).serializeJSON()</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">serializeJSON</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">    <span class="pl-s">var</span> serializedObject, formAsArray, keys, type, value, _ref, f, opts;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    opts <span class="pl-k">=</span> f.optsWithDefaults(options); <span class="pl-c">// calculate values for options {parseNumbers, parseBoolens, parseNulls}</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    f.validateOptions(opts);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">    formAsArray <span class="pl-k">=</span> <span class="pl-v">this</span>.serializeArray(); <span class="pl-c">// array of objects {name, value}</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    f.readCheckboxUncheckedValues(formAsArray, <span class="pl-v">this</span>, opts); <span class="pl-c">// add {name, value} of unchecked checkboxes if needed</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    serializedObject <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">    $.each(formAsArray, <span class="pl-st">function</span> (<span class="pl-vpf">i</span>, <span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      keys <span class="pl-k">=</span> f.splitInputNameIntoKeysArray(input.<span class="pl-sc">name</span>);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">      type <span class="pl-k">=</span> keys.<span class="pl-s3">pop</span>(); <span class="pl-c">// the last element is always the type (&quot;string&quot; by default)</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>skip<span class="pl-pds">&#39;</span></span>) { <span class="pl-c">// easy way to skip a value</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">        value <span class="pl-k">=</span> f.parseValue(input.<span class="pl-sc">value</span>, type, opts); <span class="pl-c">// string, number, boolean or null</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">        <span class="pl-k">if</span> (opts.parseWithFunction <span class="pl-k">&amp;&amp;</span> type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span>) value <span class="pl-k">=</span> opts.parseWithFunction(value, input.<span class="pl-sc">name</span>); <span class="pl-c">// allow for custom parsing</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">        f.deepSet(serializedObject, keys, value, opts);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">    <span class="pl-k">return</span> serializedObject;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">  <span class="pl-c">// Use $.serializeJSON as namespace for the auxiliar functions</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">  <span class="pl-c">// and to define defaults</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">  $.serializeJSON <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    defaultOptions<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">      parseNumbers<span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c">// convert values like &quot;1&quot;, &quot;-2.33&quot; to 1, -2.33</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">      parseBooleans<span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c">// convert &quot;true&quot;, &quot;false&quot; to true, false</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">      parseNulls<span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c">// convert &quot;null&quot; to null</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">      parseAll<span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c">// all of the above</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">      parseWithFunction<span class="pl-k">:</span> <span class="pl-c1">null</span>, <span class="pl-c">// to use custom parser, a function like: function(val){ return parsed_val; }</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">      checkboxUncheckedValue<span class="pl-k">:</span> <span class="pl-c1">undefined</span>, <span class="pl-c">// to include that value for unchecked checkboxes (instead of ignoring them)</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">      useIntKeysAsArrayIndex<span class="pl-k">:</span> <span class="pl-c1">false</span> <span class="pl-c">// name=&quot;foo[2]&quot; value=&quot;v&quot; =&gt; {foo: [null, null, &quot;v&quot;]}, instead of {foo: [&quot;2&quot;: &quot;v&quot;]}</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">    <span class="pl-c">// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">    <span class="pl-en">optsWithDefaults</span>: <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">      <span class="pl-s">var</span> f, parseAll;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">      <span class="pl-k">if</span> (options <span class="pl-k">==</span> <span class="pl-c1">null</span>) options <span class="pl-k">=</span> {}; <span class="pl-c">// arg default value = {}</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">      f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">      parseAll <span class="pl-k">=</span> f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>parseAll<span class="pl-pds">&#39;</span></span>, options);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">        parseNumbers<span class="pl-k">:</span>  parseAll <span class="pl-k">||</span> f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>parseNumbers<span class="pl-pds">&#39;</span></span>,  options),</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        parseBooleans<span class="pl-k">:</span> parseAll <span class="pl-k">||</span> f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>parseBooleans<span class="pl-pds">&#39;</span></span>, options),</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">        parseNulls<span class="pl-k">:</span>    parseAll <span class="pl-k">||</span> f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>parseNulls<span class="pl-pds">&#39;</span></span>,    options),</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">        parseWithFunction<span class="pl-k">:</span>         f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>parseWithFunction<span class="pl-pds">&#39;</span></span>, options),</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        checkboxUncheckedValue<span class="pl-k">:</span>    f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>checkboxUncheckedValue<span class="pl-pds">&#39;</span></span>, options),</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        useIntKeysAsArrayIndex<span class="pl-k">:</span>    f.optWithDefaults(<span class="pl-s1"><span class="pl-pds">&#39;</span>useIntKeysAsArrayIndex<span class="pl-pds">&#39;</span></span>, options)</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">    <span class="pl-en">optWithDefaults</span>: <span class="pl-st">function</span>(<span class="pl-vpf">key</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">      <span class="pl-k">return</span> (options[key] <span class="pl-k">!==</span> <span class="pl-c1">false</span>) <span class="pl-k">&amp;&amp;</span> (options[key] <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> (options[key] <span class="pl-k">||</span> $.serializeJSON.defaultOptions[key]);</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    <span class="pl-en">validateOptions</span>: <span class="pl-st">function</span>(<span class="pl-vpf">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">      <span class="pl-s">var</span> opt, validOpts;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">      validOpts <span class="pl-k">=</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>parseNumbers<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>parseBooleans<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>parseNulls<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>parseAll<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>parseWithFunction<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>checkboxUncheckedValue<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>useIntKeysAsArrayIndex<span class="pl-pds">&#39;</span></span>]</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">      <span class="pl-k">for</span> (opt <span class="pl-k">in</span> opts) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        <span class="pl-k">if</span> (validOpts.<span class="pl-s3">indexOf</span>(opt) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">          <span class="pl-k">throw</span> <span class="pl-k">new</span>  <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>serializeJSON ERROR: invalid option &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> opt <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;. Please use one of <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> validOpts.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">    <span class="pl-c">// Convert the string to a number, boolean or null, depending on the enable option and the string format.</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    <span class="pl-en">parseValue</span>: <span class="pl-st">function</span>(<span class="pl-vpf">str</span>, <span class="pl-vpf">type</span>, <span class="pl-vpf">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">      <span class="pl-s">var</span> value, f;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">      f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> str; <span class="pl-c">// force string</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>  <span class="pl-k">||</span> (opts.parseNumbers  <span class="pl-k">&amp;&amp;</span> f.isNumeric(str))) <span class="pl-k">return</span> <span class="pl-s3">Number</span>(str); <span class="pl-c">// number</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> (opts.parseBooleans <span class="pl-k">&amp;&amp;</span> (str <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> str <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>))) <span class="pl-k">return</span> ([<span class="pl-s1"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>].<span class="pl-s3">indexOf</span>(str) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>); <span class="pl-c">// boolean</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>null<span class="pl-pds">&#39;</span></span>    <span class="pl-k">||</span> (opts.parseNulls    <span class="pl-k">&amp;&amp;</span> str <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">return</span> [<span class="pl-s1"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>].<span class="pl-s3">indexOf</span>(str) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> null <span class="pl-k">:</span> str; <span class="pl-c">// null</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>array<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> JSON.<span class="pl-s3">parse</span>(str); <span class="pl-c">// array or objects require JSON</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> f.parseValue(str, <span class="pl-c1">null</span>, {parseNumbers<span class="pl-k">:</span> <span class="pl-c1">true</span>, parseBooleans<span class="pl-k">:</span> <span class="pl-c1">true</span>, parseNulls<span class="pl-k">:</span> <span class="pl-c1">true</span>}); <span class="pl-c">// try again with something like &quot;parseAll&quot;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">      <span class="pl-k">return</span> str; <span class="pl-c">// otherwise, keep same string</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">    <span class="pl-en">isObject</span>:          <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>) { <span class="pl-k">return</span> obj <span class="pl-k">===</span> <span class="pl-s3">Object</span>(obj); }, <span class="pl-c">// is this variable an object?</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">    <span class="pl-en">isUndefined</span>:       <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>) { <span class="pl-k">return</span> obj <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>; }, <span class="pl-c">// safe check for undefined values</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">    <span class="pl-en">isValidArrayIndex</span>: <span class="pl-st">function</span>(<span class="pl-vpf">val</span>) { <span class="pl-k">return</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-s3">test</span>(<span class="pl-s3">String</span>(val)); }, <span class="pl-c">// 1,2,3,4 ... are valid array indexes</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">    <span class="pl-en">isNumeric</span>:         <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>) { <span class="pl-k">return</span> obj <span class="pl-k">-</span> <span class="pl-s3">parseFloat</span>(obj) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>; }, <span class="pl-c">// taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">    <span class="pl-c">// Split the input name in programatically readable keys.</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">    <span class="pl-c">// The last element is always the type (default &quot;_&quot;).</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">    <span class="pl-c">// Examples:</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo&quot;              =&gt; [&#39;foo&#39;, &#39;_&#39;]</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo:string&quot;       =&gt; [&#39;foo&#39;, &#39;string&#39;]</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo:boolean&quot;      =&gt; [&#39;foo&#39;, &#39;boolean&#39;]</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">    <span class="pl-c">// &quot;[foo]&quot;            =&gt; [&#39;foo&#39;, &#39;_&#39;]</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo[inn][bar]&quot;    =&gt; [&#39;foo&#39;, &#39;inn&#39;, &#39;bar&#39;, &#39;_&#39;]</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo[inn[bar]]&quot;    =&gt; [&#39;foo&#39;, &#39;inn&#39;, &#39;bar&#39;, &#39;_&#39;]</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo[inn][arr][0]&quot; =&gt; [&#39;foo&#39;, &#39;inn&#39;, &#39;arr&#39;, &#39;0&#39;, &#39;_&#39;]</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">    <span class="pl-c">// &quot;arr[][val]&quot;       =&gt; [&#39;arr&#39;, &#39;&#39;, &#39;val&#39;, &#39;_&#39;]</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">    <span class="pl-c">// &quot;arr[][val]:null&quot;  =&gt; [&#39;arr&#39;, &#39;&#39;, &#39;val&#39;, &#39;null&#39;]</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    <span class="pl-en">splitInputNameIntoKeysArray</span>: <span class="pl-st">function</span> (<span class="pl-vpf">name</span>) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">      <span class="pl-s">var</span> keys, nameWithoutType, type, _ref, f;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">      f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">      _ref <span class="pl-k">=</span> f.extractTypeFromInputName(name), nameWithoutType <span class="pl-k">=</span> _ref[<span class="pl-c1">0</span>], type <span class="pl-k">=</span> _ref[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">      keys <span class="pl-k">=</span> nameWithoutType.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// split string into array</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">      keys <span class="pl-k">=</span> $.map(keys, <span class="pl-st">function</span> (<span class="pl-vpf">key</span>) { <span class="pl-k">return</span> key.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>]<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>); }); <span class="pl-c">// remove closing brackets</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">      <span class="pl-k">if</span> (keys[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) { keys.<span class="pl-s3">shift</span>(); } <span class="pl-c">// ensure no opening bracket (&quot;[foo][inn]&quot; should be same as &quot;foo[inn]&quot;)</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">      keys.<span class="pl-s3">push</span>(type); <span class="pl-c">// add type at the end</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">      <span class="pl-k">return</span> keys;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">    <span class="pl-c">// Returns [name-without-type, type] from name.</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo&quot;              =&gt;  [&quot;foo&quot;, &quot;_&quot;]</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo:boolean&quot;      =&gt;  [&quot;foo&quot;, &quot;boolean&quot;]</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">    <span class="pl-c">// &quot;foo[bar]:null&quot;    =&gt;  [&quot;foo[bar]&quot;, &quot;null&quot;]</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">    <span class="pl-en">extractTypeFromInputName</span>: <span class="pl-st">function</span>(<span class="pl-vpf">name</span>) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">      <span class="pl-s">var</span> match, f;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">      f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">      <span class="pl-k">if</span> (match <span class="pl-k">=</span> name.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>):(<span class="pl-c1">[<span class="pl-k">^</span>:]</span><span class="pl-k">+</span>)<span class="pl-k">$</span><span class="pl-pds">/</span></span>)){</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">        <span class="pl-s">var</span> validTypes <span class="pl-k">=</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>null<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>array<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>skip<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>]; <span class="pl-c">// validate type</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">        <span class="pl-k">if</span> (validTypes.<span class="pl-s3">indexOf</span>(match[<span class="pl-c1">2</span>]) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">          <span class="pl-k">return</span> [match[<span class="pl-c1">1</span>], match[<span class="pl-c1">2</span>]];</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">          <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>serializeJSON ERROR: Invalid type <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> match[<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> found in input name &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;, please use one of <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> validTypes.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="pl-k">return</span> [name, <span class="pl-s1"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span>]; <span class="pl-c">// no defined type, then use parse options</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">    <span class="pl-c">// Set a value in an object or array, using multiple keys to set in a nested object or array:</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">    <span class="pl-c">// deepSet(obj, [&#39;foo&#39;], v)               // obj[&#39;foo&#39;] = v</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">    <span class="pl-c">// deepSet(obj, [&#39;foo&#39;, &#39;inn&#39;], v)        // obj[&#39;foo&#39;][&#39;inn&#39;] = v // Create the inner obj[&#39;foo&#39;] object, if needed</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">    <span class="pl-c">// deepSet(obj, [&#39;foo&#39;, &#39;inn&#39;, &#39;123&#39;], v) // obj[&#39;foo&#39;][&#39;arr&#39;][&#39;123&#39;] = v //</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">    <span class="pl-c">// deepSet(obj, [&#39;0&#39;], v)                                   // obj[&#39;0&#39;] = v</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">    <span class="pl-c">// deepSet(arr, [&#39;0&#39;], v, {useIntKeysAsArrayIndex: true})   // arr[0] = v</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">    <span class="pl-c">// deepSet(arr, [&#39;&#39;], v)                                    // arr.push(v)</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">    <span class="pl-c">// deepSet(obj, [&#39;arr&#39;, &#39;&#39;], v)                             // obj[&#39;arr&#39;].push(v)</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">    <span class="pl-c">// arr = [];</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">    <span class="pl-c">// deepSet(arr, [&#39;&#39;, v]          // arr =&gt; [v]</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">    <span class="pl-c">// deepSet(arr, [&#39;&#39;, &#39;foo&#39;], v)  // arr =&gt; [v, {foo: v}]</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">    <span class="pl-c">// deepSet(arr, [&#39;&#39;, &#39;bar&#39;], v)  // arr =&gt; [v, {foo: v, bar: v}]</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">    <span class="pl-c">// deepSet(arr, [&#39;&#39;, &#39;bar&#39;], v)  // arr =&gt; [v, {foo: v, bar: v}, {bar: v}]</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">    <span class="pl-en">deepSet</span>: <span class="pl-st">function</span> (<span class="pl-vpf">o</span>, <span class="pl-vpf">keys</span>, <span class="pl-vpf">value</span>, <span class="pl-vpf">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">      <span class="pl-s">var</span> key, nextKey, tail, lastIdx, lastVal, f;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">      <span class="pl-k">if</span> (opts <span class="pl-k">==</span> <span class="pl-c1">null</span>) opts <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">      f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">      <span class="pl-k">if</span> (f.isUndefined(o)) { <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>ArgumentError: param &#39;o&#39; expected to be an object or array, found undefined<span class="pl-pds">&quot;</span></span>); }</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>keys <span class="pl-k">||</span> keys.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>ArgumentError: param &#39;keys&#39; expected to be an array with least one element<span class="pl-pds">&quot;</span></span>); }</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">      key <span class="pl-k">=</span> keys[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">      <span class="pl-c">// Only one key, then it&#39;s not a deepSet, just assign the value.</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">      <span class="pl-k">if</span> (keys.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">        <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">          o.<span class="pl-s3">push</span>(value); <span class="pl-c">// &#39;&#39; is used to push values into the array (assume o is an array)</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">          o[key] <span class="pl-k">=</span> value; <span class="pl-c">// other keys can be used as object keys or array indexes</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">      <span class="pl-c">// With more keys is a deepSet. Apply recursively.</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">        nextKey <span class="pl-k">=</span> keys[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">        <span class="pl-c">// &#39;&#39; is used to push values into the array,</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">        <span class="pl-c">// with nextKey, set the value into the same object, in object[nextKey].</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">        <span class="pl-c">// Covers the case of [&#39;&#39;, &#39;foo&#39;] and [&#39;&#39;, &#39;var&#39;] to push the object {foo, var}, and the case of nested arrays.</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">        <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">          lastIdx <span class="pl-k">=</span> o.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; <span class="pl-c">// asume o is array</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">          lastVal <span class="pl-k">=</span> o[lastIdx];</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">          <span class="pl-k">if</span> (f.isObject(lastVal) <span class="pl-k">&amp;&amp;</span> (f.isUndefined(lastVal[nextKey]) <span class="pl-k">||</span> keys.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">2</span>)) { <span class="pl-c">// if nextKey is not present in the last object element, or there are more keys to deep set</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">            key <span class="pl-k">=</span> lastIdx; <span class="pl-c">// then set the new value in the same object element</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">            key <span class="pl-k">=</span> lastIdx <span class="pl-k">+</span> <span class="pl-c1">1</span>; <span class="pl-c">// otherwise, point to set the next index in the array</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">        <span class="pl-c">// o[key] defaults to object or array, depending if nextKey is an array index (int or &#39;&#39;) or an object key (string)</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">        <span class="pl-k">if</span> (f.isUndefined(o[key])) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">          <span class="pl-k">if</span> (nextKey <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) { <span class="pl-c">// &#39;&#39; is used to push values into the array.</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">            o[key] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">          } <span class="pl-k">else</span> <span class="pl-k">if</span> (opts.useIntKeysAsArrayIndex <span class="pl-k">&amp;&amp;</span> f.isValidArrayIndex(nextKey)) { <span class="pl-c">// if 1, 2, 3 ... then use an array, where nextKey is the index</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">            o[key] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">          } <span class="pl-k">else</span> { <span class="pl-c">// for anything else, use an object, where nextKey is going to be the attribute name</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">            o[key] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">        <span class="pl-c">// Recursively set the inner object</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">        tail <span class="pl-k">=</span> keys.<span class="pl-s3">slice</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">        f.deepSet(o[key], tail, value, opts);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">    <span class="pl-c">// Fill the formAsArray object with values for the unchecked checkbox inputs,</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">    <span class="pl-c">// using the same format as the jquery.serializeArray function.</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">    <span class="pl-c">// The value of the unchecked values is determined from the opts.checkboxUncheckedValue</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">    <span class="pl-c">// and/or the data-unchecked-value attribute of the inputs.</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">    <span class="pl-en">readCheckboxUncheckedValues</span>: <span class="pl-st">function</span> (<span class="pl-vpf">formAsArray</span>, <span class="pl-vpf">$form</span>, <span class="pl-vpf">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">      <span class="pl-s">var</span> selector, $uncheckedCheckboxes, $el, dataUncheckedValue, f;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">      <span class="pl-k">if</span> (opts <span class="pl-k">==</span> <span class="pl-c1">null</span>) opts <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">      f <span class="pl-k">=</span> $.serializeJSON;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">      selector <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>input[type=checkbox][name]:not(:checked)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">      $uncheckedCheckboxes <span class="pl-k">=</span> $form.<span class="pl-s3">find</span>(selector).<span class="pl-s3">add</span>($form.filter(selector));</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">      $uncheckedCheckboxes.each(<span class="pl-st">function</span> (<span class="pl-vpf">i</span>, <span class="pl-vpf">el</span>) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">        $el <span class="pl-k">=</span> $(el);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">        dataUncheckedValue <span class="pl-k">=</span> $el.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-unchecked-value<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">        <span class="pl-k">if</span>(dataUncheckedValue) { <span class="pl-c">// data-unchecked-value has precedence over option opts.checkboxUncheckedValue</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">          formAsArray.<span class="pl-s3">push</span>({name<span class="pl-k">:</span> el.<span class="pl-sc">name</span>, value<span class="pl-k">:</span> dataUncheckedValue});</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>f.isUndefined(opts.checkboxUncheckedValue)) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">            formAsArray.<span class="pl-s3">push</span>({name<span class="pl-k">:</span> el.<span class="pl-sc">name</span>, value<span class="pl-k">:</span> opts.checkboxUncheckedValue});</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">}(<span class="pl-s3">window</span>.jQuery <span class="pl-k">||</span> <span class="pl-s3">window</span>.Zepto <span class="pl-k">||</span> <span class="pl-s3">window</span>.$));</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05195s from github-fe143-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-af95b05cb14b7a29b0457c26b4a1d24151f4a47842c8e74bd556622f347b9d3d.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-2375cf3a0e93d1c4a609a11f141832798e84933a331a88b5240af5f3aade9e2d.js" type="text/javascript"></script>
      
      
  </body>
</html>

