exports.wait = () => {
	return`βπΌβππβππΈπΈβ ππΈππ ππΌπ»πΈβπΎ ππΈππΈ ββπππΌπ γ`
}

exports.succes = () => {
	return`*γ SUCCES γ*`
}

exports.lvlon = () => {
	return`*γ ENABLE γ LEVELING*`
}

exports.lvloff = () => {
	return`*γ DISABLE γ LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`ββ£ββ€BELUM TERDAFTAR ;(β’ββ£ββ\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar ${pushname}|18*`
}

exports.rediregis = () => {
	return`ββ£ββ€SUDAH TERDAFTAR :)β’ββ£ββ\n\n*Kamu sudah terdaftar*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`π½πππβ πβπ βπΈβππΈ πΉπππΈ π»π πΎπβπΈππΈβ π»π π»πΈππΈπ πΎβπβ `
}

exports.ownerb = () => {
	return`π½πππβ πβπ βπΈβππΈ πΉπππΈ π»π πΎπβπΈππΈβ πππΌβ ππβπΌβ πΉππ`
}

exports.ownerg = () => {
	return`π½πππβ πβπ βπΈβππΈ πΉπππΈ π»π πΎπβπΈππΈβ πππΌβ ππβπΌβ ππΌππππΈ π»π πΎβπβ`
}

exports.admin = () => {
	return`π½πππβ πβπ βπΈβππΈ πΉπππΈ π»π πΎπβπΈππΈβ πππΌβ πΈπ»ππβ πΎβπβ`
}

exports.badmin = () => {
	return`π½πππβ πβπ βπΈβππΈ πΉπππΈ π»π πΎπβπΈππΈβ ππΌππππΈ πΉππ ππΌβππΈπ»π πΈπ»ππβ`
}

exports.nsfwoff = () => {
	return`βππ½π πΉπΌπππ π»π πΈππππ½ππΈβ`
}

exports.bug = () => {
	return`ππΈππΈππΈβ ππΌππΈβ π»πππΈβπβππΈβ ππΌ ππβπΌβ .ππβπΎπΎπ ππβπΌβ ππΌβπΈβπΎπΎπΈβπ βππΈ`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*γ REGISTRASI γ*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`β£β€PENDAFTARAN SUKSESβ’β£\n\nβ³ *NAMA* : ${namaUser}\nβ³ *NOMER* : wa.me/${sender.split("@")[0]}\nβ³ *UMUR* : ${umurUser}\n*TERIMA KASIH SUDAH MENDAFTAR* >3\nβββ£βββ€THANKSβ’βββ£βββ`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ββ±level mu : ${getLevelingLevel(sender)}*\n*β£β±jenis command : ${command}*\n*ββ±syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*γ SELAMAT γ*
 πβ€ Nama : ${pushname}
 πβ€ Nomer : ${sender.split("@")[0]}
 πβ€ Xp : ${getLevelingXp(sender)}
 πβ€ Limit :  +3
 πβ€ Pangkat :  ${role}
 πβ€ Level : ${getLevel} β± ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6283146208804\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*γ LIMIT COUNT γ*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`βͺ *γ ATM γ*\n  ββ β *Name* : ${pushname}\n  ββ β *Nomor* : ${sender.split("@")[0]}\n  ββ β *Uang* : ${uangkau}
`}
