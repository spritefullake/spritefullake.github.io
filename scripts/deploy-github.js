const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  '_site',
  {
    branch: 'master',
    repo: 'https://github.com/spritefullake/spritefullake.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
