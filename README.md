# CRUDFood

possible REST requests:

* create a food <br/>
{{ base_url  }}/food <br/>
JSON <br/>
{ <br/>
  "name": "rice", <br/>
  "calories": "200" <br/>
} <br/>
<br/>
* read foods <br/>
{{ base_url  }}/foods<br/>
<br/>
* update food<br/>
{{ base_url  }}/food/:id<br/>
{<br/>
	"name": "feijoada alt" <br/>
}<br/>
<br/>
* delete food/:id<br/>
<br/>
installed dependecies: <br/>
express <br/>
mongoose
