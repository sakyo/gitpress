## Git Press +

[Git Press +](http://www.gitpress.org) is a light weight tool to create the web site of your github project on the easist way.

You can build your own site just in three steps:

### Step ONE 

If you don't have a README.md (or README.markdown) file on your project, create one.

### Step TWO

Create a configure file named gitpress.json on your project.

```
touch gitpress.json & echo '{}' > gitpress.json
git add gitpress.json
git commit -a -m 'add gitpress configure' & git push origin master
```

### Step THREE

visit your site with `http://&lt;repo&gt;.&lt;user&gt;.gitpress.org`

*example file: github.json*

```json
{
	"docs"      : ["posts"],
	"template"	: "default",	
	"perpage"   : 10,
	"types"     : {
		"\\.(md||markdown)$"   : "markdown", 
		"\\.(js||css||json)$"  : "code",
		"\\.html?$"            : "html",
		".*"                   : "text"		
	},
	"title"  : "Akira's Blog",
	"comment"  : "on",
	"friends"  : [
		{
		  "name"  : "github",
		  "title"  : "github",
		  "url"  : "http://github.com"		  
		},
		{
		  "name"  : "gitpress",
		  "title"  : "gitpress",
		  "url"  : "http://gitpress.org"
		}
	] 
}
```

