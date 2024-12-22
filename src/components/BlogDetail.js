import React, { useRef, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';

const blogData = 
[
  {
    "id": 1,
    "title": "Ceza Hukuku",
    "image": "/images/ceza_hukuku.jpg",
    "firstcontent": `
      <h3 id="ceza-hukuku">Ceza Hukuku: Ankara'da Bir Avukatın Perspektifinden</h3>
      <p>Ceza hukuku, suçları ve suçluları düzenleyen, bireylerin suç işlediklerinde karşılaştıkları hukuki süreçleri ve bu süreçlerin nasıl işlemesi gerektiğini belirleyen bir hukuk dalıdır. Türkiye'de ceza hukuku, hem bireylerin haklarını korumak hem de toplumsal düzeni sağlamak amacıyla oldukça önemli bir yere sahiptir. Özellikle Ankara gibi büyük şehirlerde, ceza davaları büyük bir ciddiyetle ele alınır ve avukatlar, müvekkillerinin haklarını savunmak için büyük bir sorumluluk taşır.</p>
    `,
    "content": `
      <h3 id="ceza-hukuku-nedir">Ceza Hukukunun Temel İlkeleri</h3>
      <p>Ceza hukukunun temel ilkeleri, suçların tanımlanması, suçlu olan kişilerin cezalandırılması ve adaletin sağlanması üzerine odaklanır. Bu bağlamda, ceza hukuku:</p>
      <ul>
        <li><strong>Suç ve Ceza:</strong> Ceza hukuku, toplum düzenini bozan ve yasalara aykırı hareket eden davranışları suç olarak tanımlar ve bu suçların cezalandırılması için çeşitli hükümler belirler.</li>
        <li><strong>Suçluluk İlkesi:</strong> Bir kişi suç işlediği iddiasıyla suçlanabilir, ancak suçlu olduğu kanıtlanana kadar masum kabul edilir. Bu ilke, ceza yargılamasında adaletin temelini oluşturur.</li>
        <li><strong>Hukuka Aykırılık:</strong> Ceza hukuku, suçları tanımlarken, hukuka aykırılığı göz önünde bulundurur. Yani, bir davranış yalnızca kanuna aykırı olduğunda suç sayılır.</li>
      </ul>
      <h4 id="avukat-rolu">Ceza Davalarında Bir Avukatın Rolü</h4>
      <p>Ankara'da ceza avukatları, müvekkillerinin suçlamalarla karşı karşıya kaldığı her aşamada onlara rehberlik eder. Ceza davaları, savunma hakkının korunması açısından büyük önem taşır. Bir ceza avukatı, müvekkilinin haklarını savunur ve yargılama sürecinde en iyi sonucu almak için gerekli tüm hukuki önlemleri alır.</p>
      <ul>
        <li><strong>Suçlama ve Savunma:</strong> Ceza avukatının ilk görevlerinden biri, müvekkilini suçlamalar konusunda bilgilendirmek ve suçlamanın geçerli olup olmadığını incelemektir. Eğer suçlama geçerli değilse, avukat bunu yargılama sürecinde dile getirir.</li>
        <li><strong>Delil Toplama ve İnceleme:</strong> Ceza davalarında, suçun işlendiğine dair somut delillerin varlığı önemlidir. Avukat, müvekkilinin savunmasını destekleyecek deliller toplar ve bu delillerin yasal olarak geçerli olup olmadığını araştırır.</li>
        <li><strong>Yargılama Süreci:</strong> Yargılama sürecinde, avukat müvekkilinin haklarını savunur. Eğer müvekkilinin suçsuz olduğu kanıtlanırsa, beraat kararı alınması için gerekli hukuki adımları atar. Eğer suçlu bulunursa, cezanın hafifletilmesi amacıyla savunma yapabilir.</li>
      </ul>
      <h4 id="suclar-cezalar">Ceza Hukukunda Hangi Suçlar ve Cezalar Vardır?</h4>
      <p>Ceza hukuku, birçok farklı suç türünü kapsar. Bu suçlar, Türk Ceza Kanunu'nda ayrıntılı bir şekilde tanımlanmıştır. Başlıca suç kategorileri şunlardır:</p>
      <ul>
        <li><strong>Kasten İşlenen Suçlar:</strong> Cinayet, hırsızlık, dolandırıcılık gibi suçlar, failin isteği doğrultusunda gerçekleştirdiği suçlardır.</li>
        <li><strong>Taksirle İşlenen Suçlar:</strong> Kişinin bir olayı dikkatsizce ya da ihmal ederek gerçekleştirmesi sonucu meydana gelen suçlardır. Örneğin, trafik kazaları taksirle işlenen suçlar arasında yer alır.</li>
        <li><strong>Özel Hayata ve Aileye Karşı Suçlar:</strong> Aile içi şiddet, cinsel saldırı, tehdit gibi suçlar, ceza hukukunun kapsamına girer ve mağdurların korunması adına büyük bir öneme sahiptir.</li>
        <li><strong>Haksız Rekabet ve Ekonomik Suçlar:</strong> Ekonomik suçlar, ticaret hayatını etkileyen ve toplum düzenini bozan suçlardır. Kara para aklama, vergi kaçakçılığı bu tür suçlar arasında sayılabilir.</li>
      </ul>
      <h4 id="ankara-ceza-davasi">Ankara'da Ceza Davası Süreci</h4>
      <p>Ankara'da bir ceza davası süreci, genel olarak aşağıdaki adımlardan oluşur:</p>
      <ul>
        <li><strong>Soruşturma:</strong> Ceza davalarında, savcılık tarafından başlatılan soruşturma aşamasında, deliller toplanır ve şüphelinin ifadesi alınır.</li>
        <li><strong>Dava Açma:</strong> Soruşturma sonrasında, yeterli delil bulunduğunda, savcı tarafından dava açılır. Bu aşamada, avukatlar savunmalarını hazırlamaya başlar.</li>
        <li><strong>Mahkeme Süreci:</strong> Mahkemede, sanığın savunması yapılır ve davanın detayları incelenir. Yargılama sonucunda, mahkeme bir karar verir.</li>
        <li><strong>Temyiz ve İtiraz:</strong> Eğer karar müvekkil aleyhine olursa, avukat temyiz başvurusunda bulunarak kararı üst mahkemeye taşıyabilir.</li>
      </ul>
      <h4 id="avukat-secimi">Ceza Hukukunda Avukat Seçimi ve Dikkat Edilmesi Gerekenler</h4>
      <p>Ceza davalarında avukat seçimi, davanın sonucunu doğrudan etkileyebilir. Bu nedenle, müvekkillerin dikkat etmesi gereken bazı önemli noktalar şunlardır:</p>
      <ul>
        <li><strong>Uzmanlık Alanı:</strong> Ceza hukuku, karmaşık ve detaylı bir alan olduğundan, deneyimli bir ceza avukatı seçmek önemlidir. Avukatın ceza davalarındaki tecrübesi, davanın başarılı bir şekilde sonuçlanmasında etkili olabilir.</li>
        <li><strong>Referanslar:</strong> Avukat seçerken, daha önceki müvekkillerin görüşlerine başvurmak faydalı olabilir.</li>
        <li><strong>İletişim ve Güven:</strong> Avukat ve müvekkil arasında açık bir iletişim ve güven ortamı oluşturulması, davanın sağlıklı bir şekilde ilerlemesi açısından önemlidir.</li>
      </ul>
      <h3 id="sonuc">Sonuç</h3>
      <p>Ankara'da ceza hukuku, sadece suçluların cezalandırılması değil, aynı zamanda suçsuz insanların haklarının savunulması açısından da kritik bir role sahiptir. Ceza avukatı, müvekkilinin yasal haklarını en iyi şekilde savunarak, adaletin sağlanmasına katkıda bulunur. Ceza hukuku alanında doğru bir avukat seçimi, müvekkil için en önemli adımlardan biridir ve bu süreç, hukukun üstünlüğünü ve adaleti tesis etmek adına büyük bir önem taşır.</p>
    `
  }
  ,
  {
    "id": 2,
    "title": "Aile Hukuku",
    "image": "/images/aile_hukuku.jpg",
    "firstcontent":`
      <h3 id='aile-hukuku'>Aile Hukuku Nedir?</h3>
      <p>Aile hukuku, aile içindeki bireylerin haklarını ve yükümlülüklerini düzenleyen bir hukuk dalıdır. Türkiye'deki aile hukuku, evlilik, boşanma, çocukların velayeti, nafaka ve mal paylaşımı gibi konuları kapsamaktadır. Aile hukuku, toplumda aile bağlarının korunmasını sağlamayı ve bireylerin haklarının ihlali durumunda çözüm sunmayı amaçlar. Özellikle büyük şehirlerde, özellikle Ankara'da, aile hukuku davaları büyük bir ciddiyetle ele alınır.</p>
    " `,
    "content":  `
      <h3 id='aile-hukuku-ilkeleri'>Aile Hukukunun Temel İlkeleri</h3>
      <p>Aile hukukunun temel ilkeleri, bireylerin aile içindeki haklarının korunmasını sağlar. Bu ilkeler:</p>
      <ul>
        <li><strong>Evlilik ve Aile Birliği</strong>: Aile hukuku, evliliği bir yasal bağ olarak kabul eder ve bu bağın korunmasına yönelik düzenlemeler yapar. Evlilik, sadece dini bir ritüel değil, aynı zamanda hukuki bir sözleşmedir.</li>
        <li><strong>Çocuk Hakları</strong>: Aile hukukunda, çocukların üstün yararı her zaman ön plandadır. Çocukların korunması ve onların sağlıklı gelişimlerinin sağlanması, aile hukukunun temel taşlarındandır.</li>
        <li><strong>Boşanma ve Mal Paylaşımı</strong>: Boşanma, aile hukukunun en sık karşılaşılan davalarından biridir. Evlilik birliğinin sona erdiği durumlarda, eşler arasında mal paylaşımı ve nafaka gibi konular gündeme gelir.</li>
      </ul>
      <h3 id='ankara'>Ankara'da Aile Hukuku Davaları</h3>
      <p>Ankara, büyük bir şehir olmasının getirdiği yoğunluk ve çeşitli sosyal yapılar nedeniyle aile hukuku davalarının sıkça görüldüğü bir yerdir. Bu davalar, özellikle boşanma, velayet ve mal paylaşımı konularında yoğunlaşmaktadır.</p>
      <h3 id='bosanma-davasi'>Boşanma Davası</h3>
      <p>Boşanma davaları, eşler arasında evlilik birliğinin sona ermesiyle ilgili hukuki bir süreçtir. Türkiye'de boşanma, özel sebeplerle veya genel sebeplerle yapılabilir. Avukatlar, müvekkillerine boşanma süreci hakkında detaylı bilgi vererek, onların haklarını savunurlar.</p>
      <h4 id='bosanma-nedenleri'>Boşanma Nedenleri</h4>
      <p>Boşanma sebepleri, Türk Medeni Kanunu'na göre iki gruba ayrılır: özel sebepler ve genel sebepler.</p>
      <ul>
        <li><strong>Özel Sebepler:</strong> Evlilik birliğinin temelinden sarsılmasına yol açacak davranışlar (sadakatsizlik, şiddetli geçimsizlik vb.) gibi sebepler.</li>
        <li><strong>Genel Sebepler:</strong> Evlilik birliğinin sona ermesi, bir eşin diğerini terk etmesi, geçimsizlik gibi durumlar.</li>
      </ul>
      <h4 id='bosanma-sureci'>Boşanma Süreci</h4>
      <p>Boşanma davası süreci, başvurulan mahkeme türüne göre değişiklik gösterebilir. Çiftler anlaşmalı boşanma yoluna gidebilirken, anlaşmazlık durumunda çekişmeli boşanma süreci devreye girer.</p>
      <h4 id='bosanma-iki-turu'>Boşanmanın İki Türü</h4>
      <ul>
        <li><strong>Anlaşmalı Boşanma:</strong> Tarafların her konuda anlaşarak boşanmayı kabul ettiği bir durumdur. Hızlı ve taraflar arasında anlaşmazlık yaşanmadan sonuçlanır.</li>
        <li><strong>Çekişmeli Boşanma:</strong> Eşlerin boşanma konusunda anlaşmazlık yaşadığı durumdur. Bu süreç daha uzun sürebilir ve genellikle maddi durum, mal paylaşımı gibi konularda anlaşmazlıklar söz konusu olabilir.</li>
      </ul>
      <h3 id='velayet'>Velayet ve Çocuk Hakları</h3>
      <p>Velayet, çocuğun kimlerle yaşayıp kimlerin bakımını üstleneceği konusundaki kararlardır. Çocukların en iyi şekilde korunması için bu konular dikkatlice ele alınır. Velayet davaları, çocuğun menfaatlerini gözeterek düzenlenir.</p>
      <h3 id='avukat-rolu'>Aile Hukukunda Avukatın Rolü</h3>
      <p>Aile hukuku davalarında avukatın rolü oldukça büyüktür. Avukatlar, müvekkillerine davanın her aşamasında rehberlik eder, onların haklarını savunur ve hukuki çözüm yolları sunar.</p>
      <h4 id='savunma-ve-danismanlik'>Savunma ve Danışmanlık</h4>
      <p>Aile hukuku davalarına katılan avukat, müvekkillerine en iyi çözümü sunabilmek adına danışmanlık yapar. Ayrıca, davalarda gerekli savunmaların yapılabilmesi için tüm hukuki yolları dener.</p>
      <h4 id='mal-payasimi-ve-nafaka'>Mal Paylaşımı ve Nafaka</h4>
      <p>Boşanma davalarında mal paylaşımı ve nafaka, en çok tartışılan konulardan biridir. Avukat, müvekkilinin haklarının korunabilmesi için tüm gerekli adımları atar.</p>
      <h3 id='dikkat-edilmesi-gerekenler'>Aile Hukukunda Dikkat Edilmesi Gerekenler</h3>
      <p>Aile hukuku davalarında dikkat edilmesi gereken birkaç önemli konu vardır:</p>
      <ul>
        <li><strong>Uzmanlık ve Deneyim:</strong> Aile hukuku karmaşık bir alandır, bu nedenle deneyimli bir avukat seçmek büyük önem taşır. Avukatın aile hukuku konusundaki uzmanlığı, davanın seyrini etkileyebilir.</li>
        <li><strong>Çocukların Yararına Karar Vermek:</strong> Çocukların en iyi şekilde korunması, her şeyden önce gelir. Bu nedenle, velayet davalarında çocuğun menfaati her zaman göz önünde bulundurulur.</li>
        <li><strong>Boşanma Sürecinin Yönetilmesi:</strong> Boşanma süreci, duygusal açıdan zorlayıcı olabilir. Avukatlar, müvekkillerini bu süreçte bilgilendirir ve en uygun çözüm yollarını sunar.</li>
      </ul>
      <h3 id='sonuc'>Sonuç</h3>
      <p>Aile hukuku, bireylerin aile içindeki haklarını koruyarak adaletin sağlanmasını hedefler. Ankara gibi büyük şehirlerde aile hukuku davaları büyük bir dikkatle yürütülür. Bu davalar, aile üyelerinin haklarını savunmak ve adaleti sağlamak adına kritik öneme sahiptir.</p>
    " `
  }
  
,
  {
  "id": 3, 
  "title": "İş Hukuku Hizmeti",
  "image": "/images/is_hukuku.jpg",
  "firstcontent":  `
    <h3 id='is-hukuku'>İş Hukuku Nedir?</h3>
    <p>İş hukuku, işçi ile işveren arasındaki ilişkileri düzenleyen ve her iki tarafın da haklarını koruyan bir hukuk dalıdır. İş hukuku, çalışma hayatında meydana gelebilecek sorunları çözmeyi, işçilerin haklarını savunmayı ve işverenlerin yükümlülüklerini yerine getirmesini sağlamayı amaçlar. Türkiye'deki iş hukuku düzenlemeleri, çalışanların sosyal güvenlik hakları, iş güvencesi, çalışma koşulları, kıdem tazminatı ve işçi haklarını kapsar.</p>
  " `, 
  "content":  `
    <h3 id='is-hukuku-ilkeleri'>İş Hukukunun Temel İlkeleri</h3>
    <p>İş hukukunun temel ilkeleri, işçi ve işverenin karşılıklı haklarını dengelemeyi hedefler. Bu ilkeler:</p>
    <ul>
      <li><strong>Çalışanların Korunması</strong>: İş hukuku, çalışanların iş güvencesini sağlamak, adil ve güvenli çalışma koşulları sunmak için düzenlemeler yapar.</li>
      <li><strong>İşveren Yükümlülükleri</strong>: İşveren, çalışanlarının haklarına saygı göstererek, çalışma koşullarını ve sosyal hakları sağlamakla yükümlüdür.</li>
      <li><strong>Adil Ücret</strong>: İş hukuku, işçilerin yaptıkları iş karşılığında adil bir ücret almalarını sağlamak için çeşitli düzenlemeler yapar.</li>
    </ul>
    <h3 id='ankara'>Ankara'da İş Hukuku Davaları</h3>
    <p>Ankara'da iş hukuku davaları, çeşitli işçi-işveren ilişkileri ve çalışma koşulları üzerine yoğunlaşır. Bu davalar, özellikle kıdem tazminatı, ihbar tazminatı, iş sözleşmesi ihlalleri gibi konularda gündeme gelir.</p>
    <h3 id='is-sozlesmesi'>İş Sözleşmesi</h3>
    <p>İş sözleşmesi, işçi ile işveren arasında yapılan ve işçi ile işveren arasındaki hakları belirleyen yazılı bir sözleşmedir. Türkiye'deki iş kanunlarına göre, iş sözleşmesinin yazılı olması zorunludur. İş sözleşmesi, süresi, çalışma saatleri, maaş gibi önemli detayları içerir.</p>
    <h4 id='soezlesme-turleri'>İş Sözleşmesinin Türleri</h4>
    <ul>
      <li><strong>Belirli Süreli İş Sözleşmesi:</strong> İşçi ile işveren arasındaki sözleşme belirli bir süre için yapılır ve sözleşme bitiminde sona erer.</li>
      <li><strong>Belirsiz Süreli İş Sözleşmesi:</strong> İşçi ile işveren arasında yapılan ve süre kısıtlaması olmayan iş sözleşmesidir.</li>
    </ul>
    <h3 id='kidem-tazminati'>Kıdem Tazminatı</h3>
    <p>Kıdem tazminatı, işçinin işyerinde belirli bir süre çalıştıktan sonra işveren tarafından işten çıkarılması ya da işçinin kendi isteğiyle işten ayrılması durumunda ödenen bir tazminattır. Kıdem tazminatının hesaplanması, çalışılan yıl sayısı ve ücretle orantılıdır.</p>
    <h3 id='ihbar-tazminati'>İhbar Tazminatı</h3>
    <p>İhbar tazminatı, iş sözleşmesinin feshedilmesi durumunda işverenin, işçiye önceden bildirimde bulunması gerektiği süreyi ihlal etmesi durumunda ödenir. İhbar süresi, çalışanın işyerindeki kıdemine göre değişiklik gösterir.</p>
    <h3 id='iscinin-haklari'>İşçinin Hakları</h3>
    <p>İşçilerin sahip olduğu haklar, iş güvenliği, ücretli izin, fazla mesai ücreti, kıdem tazminatı ve sağlık güvencesini içerir. İşçi, çalışma süresi boyunca bu hakları talep edebilir ve işverenden alabilir.</p>
    <h3 id='isveren-yukumlulukleri'>İşverenin Yükümlülükleri</h3>
    <p>İşveren, çalışanlarının haklarını korumak ve çalışma koşullarını sağlamakla yükümlüdür. İşverenin yükümlülükleri arasında, iş güvenliğini sağlamak, işçi sağlığı ve güvenliği eğitimi vermek ve işçilerin maaşlarını düzenli olarak ödemek bulunur.</p>
    <h3 id='is-hukuku-avukati'>İş Hukuku Avukatının Rolü</h3>
    <p>İş hukuku avukatı, işçi ve işveren arasındaki ilişkilerin düzenlenmesi ve sorunların çözülmesinde önemli bir rol oynar. İş hukuku avukatı, işçi ve işverenin haklarını savunarak davalarda danışmanlık yapar.</p>
    <h4 id='davalar'>İş Hukuku Davaları</h4>
    <p>İş hukuku davaları, iş sözleşmesinin ihlali, tazminat talepleri, fazla mesai ücreti gibi konularda açılabilir. Avukatlar, işçinin haklarını korumak için bu davaları temsil eder.</p>
    <h3 id='dikkat-edilmesi-gerekenler'>İş Hukukunda Dikkat Edilmesi Gerekenler</h3>
    <p>İş hukuku davalarında dikkat edilmesi gereken bazı önemli noktalar şunlardır:</p>
    <ul>
      <li><strong>İş Kanunu ve Mevzuat Bilgisi:</strong> İş hukukunda dava açmadan önce, iş kanunu ve ilgili mevzuatlar hakkında bilgi sahibi olmak önemlidir.</li>
      <li><strong>Hukuki Süreler:</strong> İş hukukunda davaların açılması için belirli süreler vardır. Bu sürelerin geçirilmemesi, hak kayıplarına yol açabilir.</li>
      <li><strong>İşverenin Yükümlülükleri:</strong> İşverenin yükümlülüklerini yerine getirmemesi durumunda işçi haklarının savunulması gerekir.</li>
    </ul>
    <h3 id='sonuc'>Sonuç</h3>
    <p>İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen önemli bir hukuk dalıdır. İşçiler ve işverenler, iş hukukunun sağladığı haklardan yararlanarak daha sağlıklı bir çalışma ortamı oluşturabilir. İş hukuku avukatı, her iki tarafın haklarını koruyarak adaletin sağlanmasına yardımcı olur.</p>
  "  `
}
,
{
  "id": 4,
  "title": "Ticaret Hukuku",
  "image": "/images/ticaret_hukuku.jpg",
  "firstcontent": `
    <h3 id='ticaret-hukuku'>Ticaret Hukuku Nedir?</h3>
    <p>Ticaret hukuku, ticaretle ilgili faaliyetleri düzenleyen ve ticaret yapan kişilerin arasındaki hukuki ilişkileri belirleyen bir hukuk dalıdır. Bu alandaki düzenlemeler, tüzel kişilikler, şirketler, ticari sözleşmeler, ticari davalar ve borçlar gibi konuları kapsar. Ticaret hukuku, ticari hayatın düzenli bir şekilde işlemesini sağlayarak, ticari ilişkilerde güveni artırır ve taraflar arasındaki uyuşmazlıkların çözülmesine yardımcı olur.</p>
  `,
  "content": `
    <h3 id='ticaret-hukukunun-ilkeleri'>Ticaret Hukukunun Temel İlkeleri</h3>
    <p>Ticaret hukuku, ticari ilişkilerde tarafların haklarını ve yükümlülüklerini belirlemek amacıyla çeşitli temel ilkelere dayanır:</p>
    <ul>
      <li><strong>Özellikli İhtilaf Çözümü:</strong> Ticaret hukukunda, ticari işlemler ve ilişkiler ile ilgili ortaya çıkabilecek ihtilafların çözülmesi için özel usuller ve kurallar uygulanır.</li>
      <li><strong>Serbestlik ve Özgürlük:</strong> Ticaret hukuku, ticari ilişkilerde tarafların özgür iradesine dayanır, ancak tarafların yükümlülüklerini yerine getirmeleri beklenir.</li>
      <li><strong>Hızlı Yargılama:</strong> Ticaret hukukunda, ticari davaların hızla çözülmesi hedeflenir. Bu nedenle, ticaret mahkemeleri ve özel düzenlemeler bulunmaktadır.</li>
    </ul>
    <h3 id='ankara'>Ankara'da Ticaret Hukuku Davaları</h3>
    <p>Ankara, Türkiye'nin ticaret merkezi olmasa da önemli bir ticaret hukuku davaları yargı merkezi olarak büyük bir rol oynamaktadır. Ticaretle ilgili davalar, genellikle ticari şirketler, borçlar ve ticaretle ilgili sözleşmelerle ilgilidir.</p>
    <h3 id='ticaret-sirketleri'>Ticaret Şirketleri</h3>
    <p>Ticaret hukuku, şirketlerin kurulması, faaliyetleri, hakları, yükümlülükleri ve sona erdirilmesi gibi birçok yönü düzenler. Türkiye'de, anonim şirket, limited şirket, komandit şirket ve kolektif şirket gibi çeşitli ticaret şirketi türleri bulunmaktadır. Her bir şirket türü farklı düzenlemelere ve yasal yükümlülüklere tabidir.</p>
    <h4 id='sirket-turleri'>Ticaret Şirketlerinin Türleri</h4>
    <ul>
      <li><strong>Anonim Şirket (AŞ):</strong> Anonim şirket, sermaye şirketi türlerinden biridir ve şirket ortakları yalnızca şirkete koydukları sermaye kadar sorumludur.</li>
      <li><strong>Limited Şirket (LTD):</strong> Limited şirket, genellikle daha küçük işletmeler için uygundur. Ortaklar, şirketin borçlarından yalnızca koydukları sermaye kadar sorumludur.</li>
      <li><strong>Kolektif Şirket:</strong> Kolektif şirket, ortaklarının sınırsız sorumluluğu olduğu bir şirket türüdür. Ortaklar, şirketin borçlarından tamamen sorumlu olabilirler.</li>
      <li><strong>Komandit Şirket:</strong> Komandit şirket, hem sınırsız sorumluluğu olan ortakları hem de sınırlı sorumluluğu olan ortakları içeren bir şirket türüdür.</li>
    </ul>
    <h3 id='ticaret-sozlesmeleri'>Ticaret Sözleşmeleri</h3>
    <p>Ticaret hukukunda, ticari sözleşmeler önemli bir yer tutar. Ticaretle ilgili taraflar arasında yapılan sözleşmelerin hukuki geçerliliği, yükümlülükler ve sonuçlar açısından büyük önem taşır. Ticaret sözleşmeleri, genel ticari ilişkilerden ticaretin özel alanlarına kadar birçok konuda düzenlemeler yapar.</p>
    <h4 id='soezlesme-turleri'>Ticaret Sözleşmelerinin Türleri</h4>
    <ul>
      <li><strong>Toptan Satış Sözleşmesi:</strong> Bir satıcı ve bir alıcı arasında yapılan ve ürünlerin toptan satışını düzenleyen sözleşmelerdir.</li>
      <li><strong>Satın Alma ve Satış Sözleşmesi:</strong> İki taraf arasında yapılan, mal veya hizmet alım-satımını düzenleyen sözleşmelerdir.</li>
      <li><strong>Franchise Sözleşmesi:</strong> Bir tarafın (franchise veren) diğer tarafa (franchise alan) belirli bir ticaret markasını kullanma hakkı vermesini içeren sözleşmelerdir.</li>
    </ul>
    <h3 id='ticaret-hukuku-avukati'>Ticaret Hukuku Avukatının Rolü</h3>
    <p>Ticaret hukuku avukatı, ticari ilişkilerde ortaya çıkabilecek sorunları çözme konusunda müvekkillerine rehberlik eder. Ticaret hukuku avukatı, özellikle şirketler arası sözleşmelerde, ticaretin düzenlenmesinde ve ticaretle ilgili davalarda uzmanlık sağlar.</p>
    <h4 id='davalar'>Ticaret Hukuku Davaları</h4>
    <p>Ticaret hukuku davaları, şirketler arasında yaşanan uyuşmazlıklar, ticari sözleşmelerin ihlali, haksız rekabet ve mal satışı gibi konularda açılabilir. Avukatlar, müvekkillerini bu davalarda temsil eder ve en uygun çözüm yollarını arar.</p>
    <h3 id='dikkat-edilmesi-gerekenler'>Ticaret Hukukunda Dikkat Edilmesi Gerekenler</h3>
    <p>Ticaret hukukunda dikkat edilmesi gereken bazı önemli noktalar şunlardır:</p>
    <ul>
      <li><strong>Şirket Yapısı ve Sözleşmeler:</strong> Şirket yapısı ve sözleşmelerin doğru bir şekilde oluşturulması, ticaret hukukundaki önemli bir gerekliliktir.</li>
      <li><strong>Yasal Yükümlülükler:</strong> Ticaretle ilgili her faaliyet, yasal yükümlülükleri yerine getirmeyi gerektirir. Vergi, ticaret sicili gibi yasal gerekliliklerin yerine getirilmesi önemlidir.</li>
      <li><strong>İhtilafların Çözümü:</strong> Ticaretle ilgili davalar, genellikle şirketler arasındaki ihtilaflardan kaynaklanır. Bu nedenle, avukatların ihtilafların çözülmesinde büyük rolü vardır.</li>
    </ul>
    <h3 id='sonuc'>Sonuç</h3>
    <p>Ticaret hukuku, ticaret yapan kişilerin haklarını ve yükümlülüklerini düzenleyerek, ticari ilişkilerin adil ve güvenli bir şekilde yürütülmesini sağlar. Ticaret hukukunda uzman bir avukat, ticaretle ilgili sorunların çözülmesinde büyük bir rol oynar ve müvekkillerinin ticaretle ilgili haklarını savunur.</p>
  `
}
,
{
  "id": 5,
  "title": "İcra ve İflas Hukuku",
  "image": "/images/icra_iflas_hukuku.jpg",
  "firstcontent":  `
    <h3 id='icra-iflas-hukuku'>İcra ve İflas Hukuku Nedir?</h3>
    <p>İcra ve iflas hukuku, borçluların borçlarını ödememesi durumunda alacaklıların haklarını koruyan ve borçların tahsilini sağlamak amacıyla uygulanan hukuk dalıdır. İcra hukuku, borçlunun mal varlıklarına el koyarak, borcunu ödemesini sağlamak amacıyla yürütülen işlemleri içerirken, iflas hukuku ise, borçlunun ödeme gücünün tükenmesi durumunda borçlarının tasfiyesi için başvurulan hukuki süreci ifade eder.</p>
   `,
  "content":  `
    <h3 id='icra-iflas-hukukunun-ilkeleri'>İcra ve İflas Hukukunun Temel İlkeleri</h3>
    <p>İcra ve iflas hukuku, borçlu ile alacaklı arasındaki ilişkileri düzenlerken bazı temel ilkelere dayanır:</p>
    <ul>
      <li><strong>Alacaklının Korunması:</strong> Alacaklının hakkını alabilmesi için hukuki yolların açık olması ve alacaklarının tahsil edilmesi sağlanmalıdır.</li>
      <li><strong>Adaletin Sağlanması:</strong> Borçlunun hakları da gözetilerek, borcun ödenmesi için adil bir çözüm sağlanmalıdır.</li>
      <li><strong>Hızlı ve Etkili İcra İşlemleri:</strong> İcra işlemleri, borçlunun mal varlıklarının el konulmasından önce hızla başlatılmalı ve sonuçlandırılmalıdır.</li>
    </ul>
    <h3 id='ankara'>Ankara'da İcra ve İflas Hukuku Davaları</h3>
    <p>Ankara, Türkiye'nin başkenti olarak, özellikle büyük şirketlerin ve bireylerin yer aldığı ticaretin merkezi olmasından dolayı, icra ve iflas davalarının sıklıkla görüldüğü bir şehirdir. İcra ve iflas işlemleri, borçlunun ödeme gücüne göre değişen hukuki süreçleri içerir.</p>
    <h3 id='icra-islemleri'>İcra İşlemleri</h3>
    <p>İcra işlemleri, alacaklının borçludan alacağını tahsil etmek için başvurduğu hukuki süreçtir. İcra işlemi başlatılmadan önce alacaklının, alacaklarını talep etmesi gerekir. Alacaklı, borçlunun ödeme yapmaması durumunda icra dairesine başvurabilir. İcra işlemiyle borçlunun mal varlıklarına el konulabilir ve satışa çıkarılabilir.</p>
    <h4 id='icra-adimlari'>İcra Adımları</h4>
    <ul>
      <li><strong>İcra Takibi Başlatma:</strong> Alacaklı, borçludan alacağını tahsil edebilmek için icra takibi başlatır.</li>
      <li><strong>İcra Emri Gönderilmesi:</strong> İcra dairesi, borçluya ödeme için belirli bir süre verir.</li>
      <li><strong>Haciz ve Satış:</strong> Borçlu ödeme yapmazsa, alacaklı mal varlıklarına haciz koydurabilir ve satışa çıkarılabilir.</li>
    </ul>
    <h3 id='iflas-islemleri'>İflas İşlemleri</h3>
    <p>İflas, borçlunun ödeme gücünü kaybetmesi sonucu başlatılan ve borçlarının tasfiyesini amaçlayan bir süreçtir. İflas işlemi, borçlunun mal varlıklarının en verimli şekilde satılması ve alacaklılara ödemelerinin yapılması için başlatılır. İflas ilanı, alacaklıların borçlarını tahsil etme sürecini başlatır.</p>
    <h4 id='iflas-adimlari'>İflas Adımları</h4>
    <ul>
      <li><strong>İflas Başvurusu:</strong> Borçlu, iflas başvurusu yapmak için mahkemeye başvurur.</li>
      <li><strong>İflas İlanı:</strong> Mahkeme tarafından borçlunun iflası ilan edilir ve alacaklılar ödeme taleplerini bildirebilirler.</li>
      <li><strong>Mal Tespiti ve Satış:</strong> Borçlunun mal varlıkları, alacaklılar tarafından talep edilen paylar oranında satılır.</li>
    </ul>
    <h3 id='icra-ve-iflas-hukukunda-avukatın-rolu'>İcra ve İflas Hukukunda Avukatın Rolü</h3>
    <p>İcra ve iflas hukukunda avukatlar, alacaklıların ya da borçluların haklarını savunarak, her iki taraf için de en iyi çözümü sağlamak amacıyla rehberlik ederler. Avukatlar, icra takibi başlatma, itiraz etme, ödeme planı oluşturma veya iflas işlemleri sırasında davaları yönetme konusunda uzmanlık sağlar.</p>
    <h4 id='icra-davasi'>İcra Davaları</h4>
    <p>İcra davalarında, avukatlar alacaklıyı temsil eder ve borçlunun mal varlıklarına haciz koyulması, satış yapılması gibi işlemleri başlatır. Aynı şekilde, borçlu taraf için de savunma yaparak, ödeme planları veya taksitlendirme yapılmasını sağlayabilirler.</p>
    <h4 id='iflas-davasi'>İflas Davaları</h4>
    <p>İflas davalarında avukatlar, borçlunun iflas başvurusu, alacaklıların alacaklarını talep etmesi ve borçlunun mal varlıklarının tasfiye edilmesi sürecinde rehberlik ederler. İflas işlemleri sırasında borçlunun mal varlıkları satılır ve alacaklılara dağıtılır.</p>
    <h3 id='dikkat-edilmesi-gerekenler'>İcra ve İflas Hukukunda Dikkat Edilmesi Gerekenler</h3>
    <p>İcra ve iflas hukukunda dikkat edilmesi gereken bazı önemli noktalar şunlardır:</p>
    <ul>
      <li><strong>İcra Takibi Süresi:</strong> İcra takibi başlatılmadan önce yasal sürelerin dikkate alınması önemlidir.</li>
      <li><strong>İflas Başvurusu:</strong> İflas başvurusu yapmadan önce borçlu, ödeme gücünü kaybettiğine dair belgeleri sağlamalıdır.</li>
      <li><strong>Haciz İşlemleri:</strong> Haciz işlemlerinin hukuka uygun olarak yapılması ve borçlunun haklarının korunması önemlidir.</li>
    </ul>
    <h3 id='sonuc'>Sonuç</h3>
    <p>İcra ve iflas hukuku, borçlunun ve alacaklının haklarını dengeleyerek, ödeme güçlüğü yaşayan borçluların mal varlıklarının satılması ve alacaklıların haklarının korunmasını amaçlayan bir hukuk dalıdır. Avukatlar, icra ve iflas davalarında kritik bir rol oynar ve taraflara rehberlik eder.</p>
   `
}
,

  {
    "id": 6,
    "title": "Gayrimenkul Hukuku",
    "image": "/images/gayrimenkul_hukuku.jpg",
    "firstcontent": `
      <h3 id='gayrimenkul-hukuku'>Gayrimenkul Hukuku Nedir?</h3>
      <p>Gayrimenkul hukuku, taşınmaz mallar ile ilgili hakları düzenleyen ve bu malların alım satımı, kiralanması, ipotek edilmesi gibi işlemleri kapsayan bir hukuk dalıdır. Bu alan, hem bireyler hem de tüzel kişiler için büyük öneme sahiptir. Türkiye'deki gayrimenkul hukuku, çeşitli yasalar ve yönetmeliklerle şekillenir ve özellikle büyük şehirlerde, özellikle Ankara'da, gayrimenkul piyasası oldukça canlıdır.</p>
    `,
    "content": `
      <h3 id='gayrimenkul-hukukunun-temel-ilkeleri'>Gayrimenkul Hukukunun Temel İlkeleri</h3>
      <p>Gayrimenkul hukuku, taşınmaz malların çeşitli işlemleriyle ilgili olarak bazı temel ilkeleri benimser:</p>
      <ul>
        <li><strong>Mülkiyet Hakkı:</strong> Taşınmaz malların mülkiyetinin doğru bir şekilde devri ve kaydı sağlanmalıdır.</li>
        <li><strong>Alım-Satım İşlemleri:</strong> Gayrimenkul alım-satımı sırasında tarafların haklarının korunması ve işlemlerin hukuka uygun yapılması gerekmektedir.</li>
        <li><strong>İpotek ve Haciz:</strong> Gayrimenkuller üzerindeki ipotek ve haciz işlemleri, tarafların haklarını koruyacak şekilde yürütülmelidir.</li>
      </ul>
      <h3 id='ankara-gayrimenkul-piyasasi'>Ankara'da Gayrimenkul Hukuku</h3>
      <p>Ankara, Türkiye'nin başkenti olması nedeniyle dinamik bir gayrimenkul piyasasına sahiptir. Hem konut hem de ticari gayrimenkul alım-satımı sıkça gerçekleştirilmektedir. Bu nedenle, gayrimenkul hukuku davaları da büyük şehirlerde olduğu gibi yoğun bir şekilde işlenmektedir.</p>
      <h3 id='gayrimenkul-alim-satimi'>Gayrimenkul Alım-Satımı</h3>
      <p>Gayrimenkul alım-satımı, tarafların anlaşmazlık yaşanmadan, tüm yasal gerekliliklere uygun şekilde gerçekleştirilmesi gereken bir işlemdir. Alıcı ve satıcı arasında yapılan sözleşmeler, tapu işlemleri, ödeme planları ve diğer şartlar dikkatlice hazırlanmalıdır.</p>
      <h4 id='alim-satimi-adimlari'>Gayrimenkul Alım-Satımı Adımları</h4>
      <ul>
        <li><strong>Sözleşme Hazırlığı:</strong> Alım-satım sözleşmesi, taraflar arasında anlaşma sağlandığında hazırlanır ve her iki tarafın imzası ile geçerlilik kazanır.</li>
        <li><strong>Tapu İşlemleri:</strong> Tapu dairesine başvurularak, taşınmazın mülkiyeti devredilir ve yeni sahip kaydedilir.</li>
        <li><strong>Ödeme Yapılması:</strong> Alıcı, satış bedelini ödeyerek işlem tamamlanır.</li>
      </ul>
      <h3 id='gayrimenkul-kiralama'>Gayrimenkul Kiralama</h3>
      <p>Gayrimenkul kiralama işlemleri, hem kiraya verenin hem de kiracının haklarını düzenleyen bir süreçtir. Kiralama sözleşmesi, kiracı ile mal sahibi arasında yapılan anlaşmaya dayanır ve tarafların sorumluluklarını belirler.</p>
      <h4 id='kiralama-adimlari'>Gayrimenkul Kiralama Adımları</h4>
      <ul>
        <li><strong>Sözleşme Yapılması:</strong> Kiracı ile mal sahibi arasında kiralama sözleşmesi yapılır ve her iki tarafın hakları net bir şekilde belirlenir.</li>
        <li><strong>Ödeme ve Teslim:</strong> Kiracı, kira bedelini ödeyerek, mal sahibi taşınmazı kiraya verir.</li>
        <li><strong>İade ve Sözleşme Sona Erme:</strong> Kiralama süresi bitiminde, taşınmazın teslim edilmesi ve sözleşmenin sona erdirilmesi işlemi gerçekleştirilir.</li>
      </ul>
      <h3 id='gayrimenkul-hukukunda-avukatın-rolu'>Gayrimenkul Hukukunda Avukatın Rolü</h3>
      <p>Gayrimenkul hukuku davalarında avukatlar, alım-satım sözleşmeleri, kira sözleşmeleri, tapu işlemleri gibi süreçlerde müvekkillerine rehberlik ederler. Ayrıca, taraflar arasında anlaşmazlık durumunda, mahkemeye başvurarak çözüm yolları sunarlar.</p>
      <h4 id='avukat-internel-hizmetler'>Avukatların Sağladığı Hizmetler</h4>
      <ul>
        <li><strong>Sözleşme Hazırlığı:</strong> Avukat, gayrimenkul alım-satımı ve kiralamaları için hukuka uygun sözleşmeler hazırlar.</li>
        <li><strong>Tapu ve İpotek İşlemleri:</strong> Avukatlar, tapu işlemlerini düzenler ve ipotek işlemleri konusunda danışmanlık verirler.</li>
        <li><strong>Anlaşmazlık Çözümü:</strong> Avukatlar, taraflar arasında çıkan anlaşmazlıkları mahkemeye taşıyarak çözüm önerirler.</li>
      </ul>
      <h3 id='dikkat-edilmesi-gerekenler'>Gayrimenkul Hukukunda Dikkat Edilmesi Gerekenler</h3>
      <p>Gayrimenkul alım-satımı ve kiralama işlemleri yapılırken dikkat edilmesi gereken bazı önemli noktalar şunlardır:</p>
      <ul>
        <li><strong>Tapu Kaydı:</strong> Taşınmazın tapu kaydının doğru ve geçerli olduğundan emin olunmalıdır.</li>
        <li><strong>Vergiler ve Harçlar:</strong> Gayrimenkul işlemleri sırasında ödenecek olan vergiler ve harçlar dikkatlice hesaplanmalıdır.</li>
        <li><strong>Sözleşme Şartları:</strong> Gayrimenkul sözleşmesindeki tüm şartlar açıkça belirtilmeli ve her iki tarafın da hakları korunmalıdır.</li>
      </ul>
      <h3 id='sonuc'>Sonuç</h3>
      <p>Gayrimenkul hukuku, taşınmaz mallarla ilgili tüm işlemleri düzenleyen ve tarafların haklarını koruyan önemli bir hukuk dalıdır. Alım-satım, kiralama, ipotek ve haciz gibi işlemler sırasında hukuki bir danışmanlık almak, her iki tarafın da haklarını savunmak adına büyük önem taşır. Avukatlar, gayrimenkul hukukunda rehberlik ederek, tüm işlemlerin sorunsuz ve yasalara uygun şekilde tamamlanmasını sağlar.</p>
    `
  },
  {
    "id": 7,
    "title": "Tüketici Hukuku",
    "image": "/images/tuketici_hukuku.jpg",
    "firstcontent":  `
      <h3 id='tuketici-hukuku'>Tüketici Hukuku Nedir?</h3>
      <p>Tüketici hukuku, bireylerin mal ve hizmet tüketimiyle ilgili haklarını koruyan ve düzenleyen hukuk dalıdır. Tüketici hakları, mal ve hizmet alımlarında, satıcılar ve üreticiler ile tüketiciler arasında adaletin sağlanmasını amaçlar. Türkiye'deki tüketici hukuku, tüketiciyi koruma amacını güder ve genellikle ticaret hukuku ile paralel olarak çalışır.</p>
     `,
    "content":  `
      <h3 id='tuketici-hukukunun-temel-ilkeleri'>Tüketici Hukukunun Temel İlkeleri</h3>
      <p>Tüketici hukukunun temel ilkeleri, tüketicinin korunmasını ve adil bir ticaret ortamının sağlanmasını hedefler:</p>
      <ul>
        <li><strong>Tüketicinin Korunması:</strong> Tüketici, pazarda güçlü taraf olmayıp, hukuki düzenlemelerle korunur. Satıcılar ve üreticiler, tüketicinin zarar görmesini engellemek için sorumluluk taşır.</li>
        <li><strong>Aydınlatma Yükümlülüğü:</strong> Satıcılar, tüketiciyi aldıkları mal ve hizmetler hakkında doğru şekilde bilgilendirmekle yükümlüdürler.</li>
        <li><strong>Satış Sözleşmeleri:</strong> Tüketici ile satıcı arasındaki sözleşmelerin açık, anlaşılır ve şeffaf olması gerekmektedir.</li>
      </ul>
      <h3 id='ankara-tuketici-hukuku-davasi'>Ankara'da Tüketici Hukuku Davaları</h3>
      <p>Başkent Ankara'da, tüketici haklarının korunması konusunda çeşitli davalar açılmaktadır. Tüketici şikayetleri genellikle malın ayıplı olması, haksız sözleşmeler veya sözleşme ihlalleri gibi durumlarla ilgilidir. Tüketici mahkemeleri, tüketicilerin haklarını savunmak için oldukça önemli bir rol oynamaktadır.</p>
      <h3 id='ayipli-mal-ve-hizmetler'>Ayıplı Mal ve Hizmetler</h3>
      <p>Ayıplı mal, satışa sunulan ürünün, sözleşmeye uygun olmaması ya da beklentileri karşılamaması durumudur. Tüketici, ayıplı malın değiştirilmesi, onarılması veya para iadesi gibi haklara sahiptir. Tüketici, malın ayıplı olduğu tespit edilirse, bu durumu satıcıya bildirme hakkına sahiptir.</p>
      <h4 id='ayipli-mal-haklari'>Ayıplı Mal ve Tüketici Hakları</h4>
      <ul>
        <li><strong>Ürün Değiştirme:</strong> Tüketici, ayıplı malı değiştirme hakkına sahiptir.</li>
        <li><strong>Ürün Onarımı:</strong> Satıcı, ayıplı malı onarmak zorundadır.</li>
        <li><strong>Para İadesi:</strong> Ayıplı malın iade edilmesi durumunda, tüketici para iadesi talep edebilir.</li>
      </ul>
      <h3 id='mesafeli-satis-sozlesmeleri'>Mesafeli Satış Sözleşmeleri</h3>
      <p>Mesafeli satış sözleşmesi, satıcı ile tüketici arasındaki sözleşmenin yüz yüze görüşmeden, telefon veya internet yoluyla yapılması durumudur. Bu tür sözleşmelerde, tüketiciye cayma hakkı tanınır. Tüketicinin cayma hakkı, malın tesliminden sonraki 14 gün içinde geçerlidir.</p>
      <h4 id='cayma-hakki'>Cayma Hakkı ve Tüketici Hakları</h4>
      <ul>
        <li><strong>İade Hakkı:</strong> Tüketici, satın aldığı ürünü iade edebilir.</li>
        <li><strong>Para İadesi:</strong> Ürün iade edildikten sonra, ödeme yapılan miktar geri iade edilir.</li>
        <li><strong>Ücretsiz İade:</strong> Tüketici, cayma hakkını kullanırken herhangi bir ücret ödemek zorunda değildir.</li>
      </ul>
      <h3 id='tuketici-hukukunda-avukatın-rolu'>Tüketici Hukukunda Avukatın Rolü</h3>
      <p>Tüketici hukukunda avukatlar, müvekkillerinin haklarını savunmak ve tüketici hakları ihlallerini çözmek için büyük bir rol oynar. Avukatlar, tüketiciye karşı yapılan haksız işlemleri tespit eder ve tüketiciye uygun çözüm yolları sunar.</p>
      <h4 id='avukat-internel-hizmetler'>Avukatların Sağladığı Hizmetler</h4>
      <ul>
        <li><strong>Şikayet ve Başvurular:</strong> Tüketici avukatları, tüketiciye yönelik şikayetlerin takibi konusunda yardımcı olur.</li>
        <li><strong>Sözleşme İncelemesi:</strong> Avukatlar, tüketiciye sunulan sözleşmeleri inceleyerek, haksız şartları tespit eder.</li>
        <li><strong>Yasal Yolların Takibi:</strong> Tüketici hakları ihlal edilen durumlarda, avukatlar yasal süreçleri başlatır.</li>
      </ul>
      <h3 id='dikkat-edilmesi-gerekenler'>Tüketici Hukukunda Dikkat Edilmesi Gerekenler</h3>
      <p>Tüketici haklarını korumak için dikkat edilmesi gereken bazı önemli hususlar şunlardır:</p>
      <ul>
        <li><strong>Sözleşme Şartları:</strong> Sözleşme şartlarını dikkatlice incelemek ve şeffaflığa dikkat etmek önemlidir.</li>
        <li><strong>Ayıplı Mal İhbarı:</strong> Ayıplı mal alındığında, bu durumun derhal satıcıya bildirilmesi gerekir.</li>
        <li><strong>Cayma Hakkı:</strong> Mesafeli satışlarda cayma hakkının ne zaman ve nasıl kullanılacağı bilinmelidir.</li>
      </ul>
      <h3 id='sonuc'>Sonuç</h3>
      <p>Tüketici hukuku, tüketicilerin haklarını koruma amacı güden önemli bir hukuk dalıdır. Ayıplı mal, mesafeli satış ve diğer tüketici hakları konusunda bilinçli olmak, her tüketicinin hakkıdır. Tüketici hukuku avukatları, bu hakların savunulması konusunda kritik bir rol oynar ve mağduriyetlerin giderilmesi için çözüm yolları sunar.</p>
     `
  }
  ,
  {
    "id": 8,
    "title": "Miras Hukuku",
    "image": "/images/miras_hukuku.jpg",
    "firstcontent": `
      <h3 id='miras-hukuku'>Miras Hukuku Nedir?</h3>
      <p>Miras hukuku, bir kişinin ölümünden sonra geride bıraktığı malvarlığının nasıl paylaşılacağını düzenleyen bir hukuk dalıdır. Bu hukuk dalı, mirasçıların haklarını, mirasın paylaşılmasında izlenecek usulleri ve mirasla ilgili olabilecek ihtilafları ele alır. Miras hukuku, Türkiye'deki Medeni Kanun ile düzenlenmektedir.</p>
    `,
    "content": `
      <h3 id='miras-hukukunun-temel-ilkeleri'>Miras Hukukunun Temel İlkeleri</h3>
      <p>Miras hukukunun temel ilkeleri, ölen kişinin mirasının doğru ve adil bir şekilde paylaşılmasını sağlamayı amaçlar. Bu ilkeler arasında, mirasçılık sırası, paylaştırma kuralları ve mirasçının hakları yer alır:</p>
      <ul>
        <li><strong>Mirasçılık Sırası:</strong> Mirasçılar, ölen kişinin yakın akrabalarıdır ve öncelikli olarak belirli sıralamalara göre mirastan pay alırlar. Bu sıralama, medeni kanunla düzenlenir.</li>
        <li><strong>Paylaştırma Kuralları:</strong> Mirasın paylaşılmasında, her mirasçının alacağı pay belirli kurallara göre yapılır. Bu kurallar, ölen kişinin vasiyeti ve hukuki düzenlemelerle şekillenir.</li>
        <li><strong>Vasiyetname:</strong> Vasiyetname, kişinin mirasının nasıl paylaşılacağına dair yazılı bir belgedir. Kişi, sağken bu belgede mirasını paylaşma hakkına sahiptir.</li>
      </ul>
      <h3 id='ankara-miras-hukuku-davasi'>Ankara'da Miras Hukuku Davaları</h3>
      <p>Ankara'da miras hukuku davaları genellikle mirasın paylaşılması sırasında çıkan anlaşmazlıklar üzerine açılmaktadır. Mirasçılar arasında paylaştırma konusunda anlaşmazlıklar olabilir. Bu durumda, mahkemeye başvurarak yasal bir çözüm aranabilir.</p>
      <h3 id='miras-davalarinda-avukatın-rolu'>Miras Davalarında Avukatın Rolü</h3>
      <p>Miras hukuku davalarında, avukatların rolü son derece büyüktür. Mirasın paylaşılması ve hakların korunması konusunda avukatlar, mirasçılara yardımcı olur ve adil bir paylaştırma sağlanmasına katkı sağlar. Avukatlar, mirasçıların taleplerini mahkemeye sunar ve haklarını savunur.</p>
      <h4 id='avukat-danisma-ve-savunma'>Avukatın Sağladığı Danışmanlık ve Savunma</h4>
      <ul>
        <li><strong>Vasiyetnamenin Geçerliliği:</strong> Miras hukuku avukatları, vasiyetnamenin geçerliliğini kontrol eder ve miras paylaşımında ortaya çıkabilecek uyuşmazlıkları çözmek için hukuki yolları araştırır.</li>
        <li><strong>Miras Paylaşımı:</strong> Mirasın paylaşımı konusunda çıkan ihtilaflarda, avukatlar tarafların haklarını savunur ve paylaşımın hukuka uygun olmasını sağlar.</li>
        <li><strong>Mirasçılık Davaları:</strong> Mirasçılar arasında çıkan anlaşmazlıklar üzerine açılan davalarda avukatlar, müvekkillerini temsil eder.</li>
      </ul>
      <h3 id='miras-ile-ilgili-davalar'>Miras İle İlgili Davalar</h3>
      <p>Mirasla ilgili en yaygın davalar şunlardır:</p>
      <ul>
        <li><strong>Vasiyetnamenin İptali:</strong> Vasiyetnamenin geçersiz olduğu iddiasıyla açılan davalar, miras paylaşımında sorun yaşanması durumunda açılır.</li>
        <li><strong>Mirasçılığın İptali:</strong> Mirasçıların mirastan çıkarılması veya reddedilmesi konusunda açılan davalar da yaygın olarak görülmektedir.</li>
        <li><strong>Mirasın Paylaşılmasında Uyuşmazlıklar:</strong> Mirasçılar arasında paylaştırma konusunda çıkan anlaşmazlıklar, mahkemeye taşınabilir.</li>
      </ul>
      <h3 id='miras-hukukunda-dikkat-edilmesi-gerekenler'>Miras Hukukunda Dikkat Edilmesi Gerekenler</h3>
      <p>Miras hukuku davalarında dikkat edilmesi gereken bazı önemli hususlar şunlardır:</p>
      <ul>
        <li><strong>Vasiyetnamenin Düzenlenmesi:</strong> Vasiyetname, ölen kişinin son isteği olduğundan, dikkatlice ve hukuki gerekliliklere uygun olarak hazırlanmalıdır.</li>
        <li><strong>Yasal Haklar:</strong> Mirasçılar, yasal haklarına sahip olduklarını unutmamalı ve bu hakları savunmalıdır.</li>
        <li><strong>Miras İtirazları:</strong> Miras paylaşımında çıkan itirazlar, yasal yollarla çözülmelidir.</li>
      </ul>
      <h3 id='sonuc'>Sonuç</h3>
      <p>Miras hukuku, ölen kişinin malvarlığının doğru şekilde paylaşılmasını sağlayan önemli bir hukuk dalıdır. Mirasçılar arasında çıkan anlaşmazlıklar, yasal yollarla çözülebilir. Avukatlar, bu süreçte mirasçılara rehberlik eder ve hakların korunmasını sağlar. Miras hukuku, adaletin sağlanması adına kritik bir role sahiptir.</p>
    `
  }
  ,

];
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
};
export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));

  const [headings, setHeadings] = useState([]);
  const ref = useRef(null);

    scrollToTop();

  useEffect(() => {
    scrollToTop();
    if (blog) {
      const headingTags = [];
      const contentContainer = ref.current;
      const headingsList = contentContainer.querySelectorAll('h3, h4');
      headingsList.forEach(tag => {
        headingTags.push({
          id: tag.id,
          text: tag.innerText,
          tag: tag.tagName,
        });
      });
      setHeadings(headingTags);
    }
  }, [blog]);

  if (!blog) {
    return <div className="not-found">Blog not found</div>;
  }

  return (
    <div className="blog-detail-container">
     
      <h2 className="blog-detail-title">{blog.title}</h2>

      <div className="blog-detail-card">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <div
          className="blog-detail-firstcontent"
          dangerouslySetInnerHTML={{ __html: blog.firstcontent }}
        />
      </div>

      {headings.length > 0 && (
        <div className="table-of-contents">
          <h5>İçindekiler</h5>
          <ul>
            {headings.map((heading, index) => (
              <li key={index}>
                <Link to={`#${heading.id}`}>{heading.text}</Link> 
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="blog-detail-content"
        ref={ref}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className="signature">
        <h5>Lawyer Name</h5>
      </div>
    </div>
  );
}