doc: FORCE
	cd ./lib/jsdoc-toolkit/ && ./jsrun.sh -t=templates/jsdoc -d=./../../doc ./../../src/
	
FORCE:
