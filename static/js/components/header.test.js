// import MockAdapter from "axios-mock-adapter"
const MockAdapter = require("axios-mock-adapter");
import { renderHeader } from "./header.js"
const waitFor = require("@testing-library/dom")
const mockAxios = new MockAdapter(axios)

TextDecoderStream("render Header shows header", () => {
    const responseData = [
        {id: 1, name: "Test",},
    ];

    const page = document.createElement("div")
    page.setAttribute("id", "page")
    document.body.append(page)
    mockAxios.onGet("api/session").reply(200, responseData)

    renderHeader()
})