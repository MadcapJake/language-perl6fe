# Atom Perl 6 Support - Forgotten Edition!

[![apm package][apm-ver-link]][releases]
[![][dl-badge]][apm-pkg-link]
[![][mit-badge]][mit]

This used to be my attempt at improving the Perl 6 highlighter over the builtin one for Atom. I have since lost almost all of my time for programming.  Thankfully the Perl 6 community has taken it upon themselves to continue where I left off and make it an [official] project. **Please use the official [atom-language-perl6][official] highlighter going forward and not my own as this package is not maintained.**

Derived from the builtin [language-perl](https://github.com/atom/language-perl) package but with many bugfixes and additions.  You might ask why I didn't just add a PR there but I feel that this package adds quite a bit more that it might not be everyone's cup of tea. ~~However, I do plan on adding support for autocomplete+, linter, atom-build, and atom-runner.  Maybe even integrating a perl6 REPL would be fun!~~

![A screenshot of an funnified Perl 6 file](https://raw.githubusercontent.com/MadcapJake/language-perl6fe/master/images/example3.png)

## How do I use this?

You have three options:

1. Click the language name in the status-bar (`Ctrl+Shift+L`) and select `Perl 6 FE`
2. Disable or uninstall the `language-perl` package
3. Add this to your `config.cson` (*Application: Open Your Config*):

  ```coffee
  '*':
    core:
      customFileTypes:
        'source.perl6fe': [
          # Any extensions you'd like to override
          'p6'
          'pm6'
          't'
        ]
  ```

> Please be aware that if you do not include the `t` extension
above, your `t` files will be highlighted with the `language-perl` highlighter (using either P5 or P6 grammar depending on if you have the `use v6;` pragma).

## What Makes This The Fun Edition™?

> Perl 6 is *optimized for fun* -Audrey Tang

* This package was developed to work with [Fira Code](https://github.com/tonsky/FiraCode) ligatures

* More syntax highlighted (numbers, operators, interpolation, traits, better strings)

* ~~This package will also soon contain support for many popular atom packages that have service hooks like autocomplete+ and linter~~

* ~~I'd like to add a builtin REPL eventually~~

Here's a few more examples:

![Another screenshot of a funnified Perl 6 file](https://raw.githubusercontent.com/MadcapJake/language-perl6fe/master/images/example1.png)

![Yet another screenshot of a funnified Perl 6 file](https://raw.githubusercontent.com/MadcapJake/language-perl6fe/master/images/example2.png)

# License

[MIT][mit] © [Jake Russo][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/MadcapJake
[contributors]: https://github.com/MadcapJake/language-perl6fe/graphs/contributors
[releases]:     https://github.com/MadcapJake/language-perl6fe/releases
[mit-badge]:    https://img.shields.io/apm/l/language-perl6fe.svg
[apm-pkg-link]: https://atom.io/packages/language-perl6fe
[apm-ver-link]: https://img.shields.io/apm/v/language-perl6fe.svg
[dl-badge]:     http://img.shields.io/apm/dm/language-perl6fe.svg
[official]:     https://github.com/perl6/atom-language-perl6
