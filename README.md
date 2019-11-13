# CRUDFood

possible REST requests:

* create a food
```
{{ base_url  }}/food <br/>

{
  "name": "rice",
  "calories": "200"
} 
```

* read all foods
```
{{ base_url  }}/foods<br/>
```

* update specificfood
```
{{ base_url  }}/food/:id<br/>

{
	"name": "feijoada alt" <br/>
}
```

* delete specific food 
```
delete food/:id
```

# Installed Dependecies:
express <br/>
mongoose  

# Tutorials

https://alligator.io/nodejs/crud-operations-mongoose-mongodb-atlas/
