(function () {
      var path = window.location.pathname;
      var aliases = { '/talks': '/ideas/', '/talks/': '/ideas/', '/articles': '/ideas/', '/articles/': '/ideas/' };
      var target = aliases[path];
      if (!target && /^\/(?:en\/)?(history|projects|ideas|contact|article\/rpki-ghost)$/.test(path)) {
        target = path + '/';
      }
      if (path === '/en') target = '/en/';
      if (target) window.location.replace(target + window.location.search + window.location.hash);
    }());
