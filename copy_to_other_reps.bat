mkdocs build
@REM git commit -am "Auto Commit"
@REM git push

cd ..
cd curr
xcopy ..\mkdocs-base\*.md .
cd docs
xcopy ..\..\mkdocs-base\docs\base base
xcopy ..\..\mkdocs-base\docs\elective elective
xcopy ..\..\mkdocs-base\docs\mandatory mandatory
git commit -am "Auto Commit"
git push

cd ..
cd ..
cd cs-um.github.io\docs
xcopy ..\..\mkdocs-base\site . /e
@REM git commit -am "Auto Commit"
@REM git push

cd ..
cd ..
cd mkdocs-base