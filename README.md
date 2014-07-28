Forked from [jeyll-sass-compass](https://github.com/israveri/jekyll-sass-compass).
Deploy to GitHub pages from [WinstonYW](http://winstonyw.com/2013/02/24/jekyll_haml_sass_and_github_pages/)

Bundle it:

    bundle install

Run it:

    jekyll serve -w --baseurl ''

Watch it:

    cd _sass
    compass watch

Set up deploy folder:

    cd deploy
    git init .
    git checkout -b gh-pages
    git commit -am 'Initial commit'
    git remote add origin ...

Deploy it:

    rake deploy
