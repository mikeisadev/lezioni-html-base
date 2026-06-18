const schedaTecnicaComputer = {
	marca: "Asus",
	modello: "VivoBook S14",
	prezzoEUR: 849.99,
	cpu: {
		nome: "Intel Core i5-1135G7",
		frequenzaGHz: 2.4,
		core: 4,
		threads: 8
	},
	ramGB: 16,
	storage: [
		{ tipo: "SSD", capacitaGB: 512 },
		{ tipo: "HDD", capacitaGB: 0 }
	],
	gpu: {
		integrata: true,
		nome: "Intel Iris Xe",
		memoriaGB: 0
	},
	porte: ["USB-C", "USB-A x2", "HDMI", "jack 3.5mm"],
	dimensioniPollici: 14,
	pesoKg: 1.4,
	sistemaOperativo: "Windows 11 Home",
	funzionalita: {
		wifi: "802.11ax",
		bluetooth: "5.0",
		lettoreSD: false,
		retroilluminata: true
	}
};
