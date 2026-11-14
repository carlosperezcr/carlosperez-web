(function () {
      var path = window.location.pathname;
      var hash = window.location.hash;
      var legacy = /^#\/(history|projects|ideas|contact|article\/rpki-ghost|talks|articles)\/?$/.exec(hash);
      var aliases = { '/talks': '/ideas/', '/articles': '/ideas/' };
      var canonical = null;
      if (legacy && path === '/') {
        var oldPath = '/' + legacy[1];
        canonical = aliases[oldPath] || oldPath + '/';
      } else if (aliases[path]) {
        canonical = aliases[path];
      } else if (/^\/(?:en\/)?(history|projects|ideas|contact|article\/rpki-ghost)$/.test(path)) {
        canonical = path + '/';
      }
      if (path === '/en') canonical = '/en/';
      if (canonical) {
        window.location.replace(canonical + window.location.search + (legacy ? '' : hash));
      }
    }());
