/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
let name = "arief";

// closure
if (true) {
    let name = "budi";
    // console.log(name);
}
console.log(name);

const sayHello = (callback) => {
    if (callback && typeof callback === "function") {
        callback("Budi");
    }

    return "no callback";
};

sayHello((value) => {
    console.log("Hello: ", value);
});
