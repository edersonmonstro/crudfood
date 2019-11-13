# CRUDFood

possible REST requests:

* create a food
```
{{ base_url  }}/food

{
  "name": "rice",
  "calories": "200"
} 
```

* read all foods
```
{{ base_url  }}/foods
```

* update specificfood
```
{{ base_url  }}/food/:id

{
	"name": "feijoada alt"
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
