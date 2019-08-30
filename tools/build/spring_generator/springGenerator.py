#! /usr/bin/env python
import argparse,os,shutil


templates = {"angular":"sp_an_1","vue":"sp_vu_1","react":"sp_re_1"}
print ("This is the spring generator" )

filePath = os.path.realpath(__file__)
templatesDir = filePath[:filePath.rfind("/")+1] +  "templates"
#print ("templatesDir ----- " + templatesDir)
exclude_paths = ["node_modules","e2e","node"]
def initArgumnets():
	parser = argparse.ArgumentParser()
	parser.add_argument('-t','--type'  ,choices=['angular', 'vue', 'react'],help='Type of the generated project',default="angular")
	parser.add_argument('-n','--name'  ,help='The name of the project',required=True)
	parser.add_argument('-g','--group' ,help='The package name, group name of the project',required=True)
	parser.add_argument('-s','--serverPort'   ,help='The server port number', default="8090")
	parser.add_argument('-c','--clientPort'   ,help='The client port number', default="4200")
	parser.add_argument('-d','--dir'   ,help='The directory of the generated project', default=".")


	args = parser.parse_args()
	return args


def updateFileContents(fileName,keyText):
	inp = open(fileName,'r')
	lines = inp.readlines()
	i = 0
	while i<len(lines):
		line = lines[i]
		for curKey in keyText:
			if curKey in line:
				line = line.replace(curKey,str(keyText[curKey]))
		lines[i] = line
		i +=1
	inp.close()
	out = open(fileName,'w')
	for newLine in lines:
		out.write(newLine)
	out.close()

def checkTemplate(fileName,keyText):
	oldValue = fileName
	for curKey in keyText:
		if curKey in fileName:
			fileName = fileName.replace(curKey,str(keyText[curKey]))
	return oldValue != fileName,fileName


def isFolderExcluded(folderName):
	global exclude_paths
	for exDir in exclude_paths:
		if exDir in folderName:
			return True
	return False
	
def updateFiles(args):
	global exclude_paths
	keyText = {"${app.name}":args.name, "${app.name.title}":args.name[:1].capitalize()+args.name[1:],"${app.package}":args.group,"${srv.port}":args.serverPort,"${cli.port}":args.clientPort}
	proj = "rtcManager"
	path = args.dir + "/" + args.name
	print ("Should update " + args.dir + "/" + args.name)
	for curKey in keyText:
		print (curKey + " :: " + str(keyText[curKey]))
	for root, dirs, files in os.walk(path):
		path = root.split(os.sep)
		dirName = os.path.basename(root)
		#print "Checking --- " + dirName
		if (isFolderExcluded(root)):
			continue
		changed,newName =  checkTemplate(dirName,keyText)
		if changed:
			newName = newName.replace(".","/")
			fullPath = os.path.dirname(root) + "/" + newName
			print (fullPath)
			os.makedirs(fullPath)
			for curFile in files:
				changed,newName =  checkTemplate(os.path.basename(curFile),keyText)
				shutil.copy(root + "/" + curFile,fullPath + "/" + newName)
				updateFileContents(fullPath + "/" + newName,keyText);
			shutil.rmtree(root)
		else:
			for curFile in files:
				changed,newName =  checkTemplate(os.path.basename(curFile),keyText)
				updateFileContents(root + "/" + newName,keyText);

def generateAngular(template,args):
	global templatesDir
	print ("Generating Angular project with name " + args.name)
	# Copying over the template
	os.popen("cp -r " + templatesDir + "/" + template + " " + args.dir + "/" + args.name);
	
	
def startGeneration(args):
	global templates
	if (args.type in templates ):
		generateAngular(templates[args.type],args)
		updateFiles(args)
		
if __name__== "__main__":
	args = initArgumnets()
	startGeneration(args)


