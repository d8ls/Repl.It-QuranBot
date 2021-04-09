const http = require("https");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(5555);
setInterval(() => {
  http.get(`https://quranbot.ahmdalharthy777.repl.co`);
}, 60000);


const Discord = require('discord.js');
const client = new Discord.Client();
const Database = require("@replit/database")
const ytdl = require('ytdl-core');
const db = new Database()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Quran',{type: 'LISTENING'});
});


const Readers = [
'https://youtu.be/IrwPiwHWhXo',
'https://youtu.be/MGEWrAtHFwU',
'https://youtu.be/ZrUYRGvKT2w',
'https://youtu.be/RD5vfuSX9Xw',
'https://youtu.be/mlTEaDewo8g',
'https://youtu.be/GLTAXMHrqEs',
'https://youtu.be/Zz2ueEugAIA',
'https://youtu.be/cieEEJCEX24',
'https://youtu.be/lD44RPQzWPA',
'https://youtu.be/G6lxtvBnNPo',
'https://youtu.be/V9UIIsai5E8',
'https://youtu.be/7rr7rr4Je6I',
'https://youtu.be/_gzGlmWpocM',
'https://youtu.be/M6z0Qql4-qo',
'https://youtu.be/xPMCB_VeYt0',
'https://youtu.be/fLkdQeeRtYs'
]
const ReadersNames = [
'عبدالرحمن السديس',
'مشاري العفاسي',
'هزاع البلوشي',
'عبد الولي الأركاني',
'سعد الغامدي',
'عبدالله عواد الجهني',
'سعود الشريم',
'صلاح بو خاطر',
'عبدالمحسن القاسم',
'خالد الجليل',
'عبدالباسط عبدالصمد',
'محمد بن سليمان المحيسني',
'محمد أنور الشحات',
'ماهر المعيقلي',
'احمد العجمي',
'ياسر الدوسري'
]
const Pages = [
    ['الفاتحه','1'],
    ['البقره','2'],
    ['ال عمران','50'],
    ['النساء','77'],
    ['المائده','106'],
    ['الانعام','128'],
    ['الاعراف','151'],
    ['الانفال','177'],
    ['التوبه','187'],
    ['يونس','208'],
    ['هود','221'],
    ['يوسف','235'],
    ['الرعد','249'],
    ['ابراهيم','255'],
    ['الحجر','262'],
    ['النخل','267'],
    ['الاسراء','282'],
    ['الكهف','293'],
    ['مريم','305'],
    ['طه','312'],
    ['الانبياء','322'],
    ['الحج','332'],
    ['المومنون','342'],
    ['النور','350'],
    ['الفرقان','359'],
    ['الشعراء','367'],
    ['النمل','377'],
    ['القصص','385'],
    ['العنكبوت','396'],
    ['الروم','404'],
    ['لقمان','411'],
    ['السجده','415'],
    ['الاحزاب','418'],
    ['فاطر','434'],
    ['ياسين','440'],
    ['الصافات','446'],
    ['ص','453'],
    ['الزمر','458'],
    ['غافر','467'],
    ['فصلت','477'],
    ['الشورى','483'],
    ['الزخرف','489'],
    ['الدخان','496'],
    ['الجاثيه','499'],
    ['الاحقاف','502'],
    ['محمد','507'],
    ['الفتح','511'],
    ['الحجرات','515'],
    ['ق','518'],
    ['الذريات','520'],
    ['الطور','523'],
    ['النجم','526'],
    ['القمر','528'],
    ['الرحمن','531'],
    ['الواقعه','534'],
    ['الحديد','537'],
    ['المجادله','542'],
    ['الحشر','545'],
    ['الممتحنه','549'],
    ['الصف','551'],
    ['الجمعه','553'],
    ['المنافقون','554'],
    ['التغابن','556'],
    ['الطلاق','558'],
    ['التحريم','560'],
    ['الملك','562'],
    ['القلم','564'],
    ['الحاقه','566'],
    ['المعارج','568'],
    ['نوح','570'],
    ['الجن','572'],
    ['المزمل','574'],
    ['المدثر','575'],
    ['القيامه','577'],
    ['الانسان','578'],
    ['المرسلات','580'],
    ['النبا','582'],
    ['النازعات','583'],
    ['عبس','585'],
    ['التكوير','586'],
    ['الانفطار','587'],
    ['المطففين','587'],
    ['الانشقاق','589'],
    ['البروج','590'],
    ['الطارق','591'],
    ['الاعلى','591'],
    ['الغاشيه','592'],
    ['الفجر','593'],
    ['البلد','594'],
    ['الشمس','595'],
    ['الليل','595'],
    ['الضحى','596'],
    ['الشرح','596'],
    ['التين','597'],
    ['العلق','597'],
    ['القدر','598'],
    ['البينه','598'],
    ['الزلزله','599'],
    ['العاديات','599'],
    ['القارعه','600'],
    ['التكاثر','600'],
    ['العصر','601'],
    ['الهمزه','601'],
    ['الفيل','601'],
    ['قريش','602'],
    ['الماعون','602'],
    ['الكوثر','602'],
    ['الكافرون','603'],
    ['النصر','603'],
    ['المسد','603'],
    ['الاخلاص','604'],
    ['الفلق','604'],
    ['الناس','604']
]

client.on('message', async msg => {
    let prefix = '.'
    await db.get(`${msg.guild.id}prefix`).then(pre => {if (pre) {prefix = pre}});
	if (msg.content.startsWith(prefix)) {
		const input = msg.content.slice(prefix.length).trim().split(' ');
		const cmd = input.shift();
        let args = msg.content.slice(cmd.length+prefix.length).trim()

    if (cmd=='invite'||cmd=='inv'||cmd=='دعوة'||cmd=='دعوه') {
        const invite = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setDescription(`[**إضغط هنا - Click Here**](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=66579792)`)
        msg.channel.send(invite).then(m => m.delete({timeout : 10000}))
    } else if (cmd=='setPrefix'||cmd=='prefix'||cmd=='بادئة'||cmd=="بادئه") {
        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("**📌 , يجب ان يكون لديك صلاحيات إدارية**").then(m => m.delete({timeout : 5000}));
        if (!args) return msg.channel.send("**📌 , أكتب البادئة بعد الامر**").then(m => m.delete({timeout : 5000}));
        if (args.length > 4) return msg.channel.send("**📌 , لأسباب تتعلق بالقاعده , لايمكنك اضافة بادئة اطول من 4 حروف**").then(m => m.delete({timeout : 5000}));
        db.set(`${msg.guild.id}prefix`, args).then(() => {msg.channel.send(`📌 , تم تغيير البادئة الى : \`${args}\``).then(m => m.delete({timeout : 10000}));});
    } else if (cmd=='قرآن'||cmd=='قران'||cmd=='quran'||cmd=='Quran') {
        if (!msg.member.voice.channel) return msg.channel.send("**📌 , يجب ان تكون بروم صوتي**").then(m => m.delete({timeout : 5000}));
            const connection = await msg.member.voice.channel.join();
            if (!args) {
                await connection.play(ytdl('https://youtu.be/zBkm_sWf1F0'))
                msg.channel.send(`**\`🔴\`Live , تم تشغيل القرآن الكريم\nنعتذر على جودة الصوت**`).then(m => m.delete({timeout : 60000}))
            } else if (!isNaN(args)) {
                if (!Readers[args-1]) return msg.channel.send(`**📌 , لمعرفة اسامي الشيوخ اكتب : \`${prefix}الشيوخ\`**`).then(m => m.delete({timeout : 10000}))
                await connection.play(ytdl(Readers[args-1]))
                msg.channel.send(`**🕋 , تم تشغيل القرآن الكريم بصوت الشيخ : ${ReadersNames[args-1]}**`).then(m => m.delete({timeout : 60000}))
            }
    }else if (cmd=='الشيوخ'||cmd=='شيوخ'||cmd=='قراء'||cmd=='قارئين'||cmd=='list') {
        var qNum = 1
        const qList = new Discord.MessageEmbed()
        .setTitle('قراء القرآن الكريم')
        .setThumbnail(client.user.displayAvatarURL())
        ReadersNames.forEach(e => {
            qList.addField(`#${qNum} : `,e,false)
            qNum = qNum + 1
        })
        qList.setFooter(`Syntax : ${prefix}quran [0]`,client.user.displayAvatarURL())
        msg.channel.send(qList).then(m => m.delete({timeout : 5000}))
    } else if (cmd=='help'||cmd=='مساعدة'||cmd=='مساعده'){
        msg.channel.send('**🎈 , Sending DM**').then(m=>{
            msg.author.send('يمكنك الاطلاع على كل شي عن طريق الموقع\nhttps://quran.indiscord.repl.co/').catch(err=>{
                m.edit('**🔒 , Your Dm Is Locked**')
            }).then(g=>{
                if(g.id){
                    m.edit('**📨 , DM Sent Succesfully**')
                }
            })
        })
    } else if (cmd=='report'){
        if(!args) return msg.channel.send(`**📌 , أكتب الشكوى الخاصة بك بعد الامر**`)
        msg.channel.send(`**🎈 , جاري أرسال الشكوى**`).then(m=>{
            client.channels.cache.get("829417332308836363").send(`**\`\`\`diff\n+ By:${msg.author.username}(${msg.author.id})\n${args}\`\`\`**`).catch(err=>{
                m.edit(`**🪃 , حدث خطأ في أرسال الشكوى**`)
            }).then(g=>{
                if(g.id){
                    m.edit(`**📋 , تمت إضافة الشكوى**`)
                }
            })
        })
    } else if (cmd=='page'||cmd=='سورة'||cmd=='سوره'||cmd=='صفحه'||cmd=='صفحة'){
        if (!args) return msg.channel.send(`**🔖 , اكتب رقم الصفحه او اسم السورة**`);
        if(!isNaN(args)){
            if(!args.startsWith('0') && Number(args) < 605){
                if (args.length == 1){
                    const attachment = new Discord.MessageAttachment(`http://www.e-quran.com/mobile/pic/p00${args}.jpg`, `QuranPage00${args}.png`);
                    msg.channel.send(`**📖 , القرآن الكريم صـ${args}**`,attachment)
                } else if (args.length == 2){
                    const attachment = new Discord.MessageAttachment(`http://www.e-quran.com/mobile/pic/p0${args}.jpg`, `QuranPage0${args}.png`);
                    msg.channel.send(`**📖 , القرآن الكريم صـ${args}**`,attachment)
                } else if (args.length == 3){
                    const attachment = new Discord.MessageAttachment(`http://www.e-quran.com/mobile/pic/p${args}.jpg`, `QuranPage${args}.png`);
                    msg.channel.send(`**📖 , القرآن الكريم صـ${args}**`,attachment)
                } else {
                    msg.channel.send(`**📖 , عدد صفحات القرآن الكريم : 604**`)
                }
            } else {
                msg.channel.send(`**📖 , عدد صفحات القرآن الكريم : 604**`)
            }
        } else {
            msg.channel.send('**📚 , جارٍ البحث**').then(m=>{
                args = `${args}`.replace('ة','ه').replace('آ','ا').replace('إ','ا').replace('أ','ا').replace('ؤ','و').replace('ئ','ى')
                let page = 0;
                for (i = 0; i < Pages.length; i++) {
                    if (Pages[i][0] == args){
                        page = Pages[i][1]
                        m.edit(`**📖 , تم إيجاد السورة , جارٍ تحميل الصفحة**`)
                        m.delete({timeout : 1000})
                        if (page.length == 1){
                            setTimeout(function(){const attachment = new Discord.MessageAttachment(`http://www.e-quran.com/mobile/pic/p00${page}.jpg`, `QuranPage00${page}.png`);
                            msg.channel.send(`**📖 , القرآن الكريم صـ${page}**`,attachment)}, 1000);
                        } else if (page.length == 2){
                            setTimeout(function(){const attachment = new Discord.MessageAttachment(`http://www.e-quran.com/mobile/pic/p0${page}.jpg`, `QuranPage0${page}.png`);
                            msg.channel.send(`**📖 , القرآن الكريم صـ${page}**`,attachment)}, 1000);
                        } else if (page.length == 3){
                            setTimeout(function(){const attachment = new Discord.MessageAttachment(`http://www.e-quran.com/mobile/pic/p${page}.jpg`, `QuranPage${page}.png`);
                            msg.channel.send(`**📖 , القرآن الكريم صـ${page}**`,attachment)}, 1000);
                        }
                        break
                    }
                }
                if (page == 0){
                    m.edit('**😢 , لم اتمكن من ايجاد الصورة**')
                    m.delete({timeout : 5000})
                }
            })
        }
    }
    }
});




client.on('message', msg => {
  if (msg.content.startsWith('quranbotuptimeForCheck')) {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
    msg.channel.send(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
  }
});
 

 
client.login('Your Token Is Here');
