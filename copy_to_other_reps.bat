@REM git config --global alias.coa '!git add -A && git commit -m'
@REM xcopy Tables.md .\docs\ 
mkdocs build
git coa "Auto Commit"
git push

cd ..
cd curr
xcopy ..\mkdocs-base\*.md .
cd docs
xcopy ..\..\mkdocs-base\docs\base base
xcopy ..\..\mkdocs-base\docs\elective elective
xcopy ..\..\mkdocs-base\docs\mandatory mandatory
git coa "Auto Commit"
git push

cd ..
cd ..
cd cs-um.github.io\docs
xcopy ..\..\mkdocs-base\site . /e
@REM xcopy ..\..\mkdocs-base\Tables.md . /e
git coa "Auto Commit"
git push

cd ..
cd ..
cd mkdocs-base