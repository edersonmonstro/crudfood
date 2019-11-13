# CRUDFood

possible REST requests:

* create a food
{{ base_url  }}/food
JSON
{
  "name": "rice",
  "calories": "200"
}

* read foods
{{ base_url  }}/foods

* update food
{{ base_url  }}/food/:id
{
	"name": "feijoada alt" 
}

* delete food/:id

installed dependecies:
express <br/>
mongoose
