const { getCarro, getMoto, getCaminhao } = require("./matrizes");

test("Testando getCarro()", () => {
    expect(getCarro("monza")).toEqual({
    modelo: "monza",
    cilindrada: "2000",
    marca: "chevrolet",
    ano: "1993"
    });
});

test("Testando getMoto()", () => {
    expect(getMoto("ninja")).toEqual({
    modelo: "ninja",
    cilindrada: "600",
    marca: "kawasaki",
    ano: "2018"
    });
});

test("Testando getCaminhao()", () => {
    expect(getCaminhao("actros")).toEqual({
    modelo: "actros",
    cilindrada: "12000",
    marca: "mercedes-benz",
    ano: "2021"
    });
});
