import crypto from 'crypto';

const secretKey = process.env.NEXI_SECRET_KEY;
const url = process.env.NEXI_URL;
const host = process.env.HOST;
const config = {
  group: process.env.NEXI_GROUP,
  alias: process.env.NEXI_ALIAS,
  divisa: 'EUR',
  url: `${host}/forms/success`,
  url_back: `${host}/forms/contact`,
};

function sha1(data) {
  return crypto.createHash('sha1').update(data, 'binary').digest('hex');
}

function generateNexiPaymentMAc(codTrans, importo) {
  // Calcolo MAC
  const stringMac = `codTrans=${codTrans}divisa=EURimporto=${importo}${secretKey}`;
  const mac = sha1(stringMac);
  // console.log('mac', mac);
  return mac;
}

export default function handler(req, res) {
  // console.log(req.method);
  const { code, amount } = req.body;
  const codTrans = `${code}_${Date.now()}`;
  const importo = Number.parseInt(Number.parseFloat(amount) * 100);
  const mac = generateNexiPaymentMAc(codTrans, importo);
  const params = { ...config, codTrans, importo, mac };
  res.status(200).json({ host, url, params });
}
