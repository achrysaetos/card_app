import ReactDOM from "react-dom"
import ApolloProvider from "./ApolloProvider"
import "./index.css" // to use tailwind

// render ApolloProvider instead of App because we wrapped App in ApolloProvider in ApolloProvider.js
ReactDOM.render(ApolloProvider, document.getElementById("root")) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
