"use babel";
module.exports = {
  // This is called on plugin activation by the Atom environment
  activate(state) {
    // Install package-deps section in package.json without user intervention
    require('atom-package-deps')
      .install(null, false)
      .then( () => {
        // All dependencies are now installed, let's roll
        this.activateAfterDepsCheck()
      })
  },

  // This is called once the dependencies are properly installed
  activateAfterDepsCheck() {

    // Disable language-perl if it is enabled!
    if (! atom.packages.isPackageDisabled("language-perl6fe")) {
      atom.packages.disablePackage("language-perl6fe")
      atom.notifications.addInfo("language-perlfe has been disabled, and language-perl6 (the package which supersedes it) has been installed and activated for a more Perl 6 fun editing experience")
    }

  }
}
