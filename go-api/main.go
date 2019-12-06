package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)


type user struct {
	ID        int    `json:"ID"`
	FirstName string `json:"FirstName"`
	LastName  string `json:"LastName"`
}

type allusers []user

var users = allusers{
	{
		ID:        1,
		FirstName: "Slavik",
		LastName:  "Nychkalo",
	},
}

func createUserLink(w http.ResponseWriter, r *http.Request) {
	var newUser user
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the user FullName and LastName only in order to update")
	}
	
	json.Unmarshal(reqBody, &newUser)
	users = append(users, newUser)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(newUser)
}


func allUsersLink(w http.ResponseWriter, r *http.Request) {
	log.Print("Hello, getting all users")
	json.NewEncoder(w).Encode(users)
}

func main() {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/users", allUsersLink).Methods("GET")
	router.HandleFunc("/users", createUserLink).Methods("POST")

	log.Fatal(http.ListenAndServe(":8080", router))
}