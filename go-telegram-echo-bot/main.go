package main

import (
	"fmt";
	"time";
	"net/http";
	"encoding/json";
);

type TTest struct {
	error string
}

var myClient = &http.Client{Timeout: 10 * time.Second}

func getJson(url string, target interface{}) error {
	r, err := myClient.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()
	fmt.Println("OK")

	return json.NewDecoder(r.Body).Decode(target)
}

func main() {
	foo1 := TTest{}
	getJson("https://api.lyrics.ovh/v1/artist/title", &foo1)
	// fmt.Println(foo1)
}