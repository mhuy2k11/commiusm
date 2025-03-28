const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Load the HTML file
fs.readFile("loomian-list.html", "utf8", (err, html) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const dom = new JSDOM(html);
    const rows = dom.window.document.querySelectorAll("tr");
    const loomians = [];

    rows.forEach(row => {
        const columns = row.querySelectorAll("td");
        if (columns.length > 0) {
            const nameElement = columns[1]?.querySelector("a");
            const typeElements = columns[2]?.querySelectorAll("span[title]");
            const types = Array.from(typeElements).map(type => type.title);

            if (nameElement) {
                loomians.push({
                    name: nameElement.textContent.trim(),
                    types: types,
                });
            }
        }
    });

    // Save the data to a JSON file
    fs.writeFileSync("loomians.json", JSON.stringify(loomians, null, 2));
    console.log("Data exported to loomians.json");
});