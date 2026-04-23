"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";

const VERSICULOS = [
  { texto: "Todo lo puedo en Cristo que me fortalece.", referencia: "Filipenses 4:13" },
  { texto: "El Señor es mi pastor; nada me faltará.", referencia: "Salmos 23:1" },
  { texto: "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad, para daros un futuro y una esperanza.", referencia: "Jeremías 29:11" },
  { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", referencia: "Isaías 41:10" },
  { texto: "Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia.", referencia: "Proverbios 3:5" },
  { texto: "Buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", referencia: "Mateo 6:33" },
  { texto: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", referencia: "Salmos 91:1" },
  { texto: "Echa tu carga sobre el Señor, y él te sustentará; no dejará para siempre caído al justo.", referencia: "Salmos 55:22" },
  { texto: "Estad siempre gozosos. Orad sin cesar. Dad gracias en todo.", referencia: "1 Tesalonicenses 5:16-18" },
  { texto: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir.", referencia: "1 Corintios 10:13" },
  { texto: "El Señor es mi luz y mi salvación; ¿a quién temeré?", referencia: "Salmos 27:1" },
  { texto: "Mas los que esperan en el Señor renovarán sus fuerzas; levantarán alas como las águilas.", referencia: "Isaías 40:31" },
  { texto: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.", referencia: "Romanos 8:28" },
  { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", referencia: "Mateo 11:28" },
  { texto: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.", referencia: "Juan 14:27" },
  { texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.", referencia: "Juan 3:16" },
  { texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.", referencia: "Filipenses 4:6" },
  { texto: "Yo soy la vid, vosotros los pámpanos; el que permanece en mí y yo en él, éste lleva mucho fruto.", referencia: "Juan 15:5" },
  { texto: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza.", referencia: "Salmos 62:5" },
  { texto: "Jehová está en medio de ti, poderoso, él salvará; se gozará sobre ti con alegría.", referencia: "Sofonías 3:17" },
  { texto: "El corazón del hombre traza su rumbo, pero sus pasos los dirige el Señor.", referencia: "Proverbios 16:9" },
  { texto: "Si Dios es por nosotros, ¿quién contra nosotros?", referencia: "Romanos 8:31" },
  { texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", referencia: "Salmos 46:1" },
  { texto: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.", referencia: "Isaías 26:3" },
  { texto: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades… ni ninguna otra cosa creada nos podrá separar del amor de Dios.", referencia: "Romanos 8:38-39" },
  { texto: "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios.", referencia: "Salmos 103:2" },
  { texto: "El Señor tu Dios está en medio de ti; él es poderoso para salvar. Se deleitará en ti con gozo.", referencia: "Sofonías 3:17" },
  { texto: "Encomiendo al Señor tus obras, y tus pensamientos serán afirmados.", referencia: "Proverbios 16:3" },
  { texto: "Cercano está el Señor a los quebrantados de corazón; y salva a los contritos de espíritu.", referencia: "Salmos 34:18" },
  { texto: "¿No te lo he mandado yo? Esfuérzate y sé valiente; no temas ni desmayes, porque el Señor tu Dios estará contigo dondequiera que vayas.", referencia: "Josué 1:9" },
  { texto: "Mas la misericordia del Señor es desde la eternidad y hasta la eternidad sobre los que le temen.", referencia: "Salmos 103:17" },
  { texto: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.", referencia: "Jeremías 33:3" },
  { texto: "El Señor te bendiga y te guarde. El Señor haga resplandecer su rostro sobre ti.", referencia: "Números 6:24-25" },
  { texto: "Bueno es el Señor; es un refugio en el día de la angustia, y conoce a los que en él confían.", referencia: "Nahúm 1:7" },
  { texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.", referencia: "Proverbios 3:5-6" },
  { texto: "Aunque afligido yo y necesitado, el Señor pensará en mí. Mi ayuda y mi libertador eres tú; Dios mío, no te tardes.", referencia: "Salmos 40:17" },
  { texto: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene del Señor, que hizo los cielos y la tierra.", referencia: "Salmos 121:1-2" },
  { texto: "Ahora bien, se conoce que en todas las cosas Dios obra para el bien de los que lo aman.", referencia: "Romanos 8:28" },
  { texto: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.", referencia: "Gálatas 5:22-23" },
  { texto: "Por tanto, no desmayamos; antes aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día.", referencia: "2 Corintios 4:16" },
  { texto: "En todo fuisteis enriquecidos en él, en toda palabra y en toda ciencia.", referencia: "1 Corintios 1:5" },
  { texto: "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", referencia: "Isaías 40:31" },
  { texto: "Porque yo estoy convencido de que aquel que comenzó tan buena obra en vosotros la irá perfeccionando hasta el día de Cristo Jesús.", referencia: "Filipenses 1:6" },
  { texto: "La Palabra del Señor es recta, y toda su obra es hecha con fidelidad.", referencia: "Salmos 33:4" },
  { texto: "Deléitate asimismo en el Señor, y él te concederá las peticiones de tu corazón.", referencia: "Salmos 37:4" },
  { texto: "Invoca mi nombre en el día de la angustia; te libraré, y tú me honrarás.", referencia: "Salmos 50:15" },
  { texto: "El Señor es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado.", referencia: "Salmos 28:7" },
  { texto: "Más vale un momento en tus atrios que mil fuera de ellos.", referencia: "Salmos 84:10" },
  { texto: "Confía en el Señor y haz el bien; habitarás en la tierra y te alimentarás de su fidelidad.", referencia: "Salmos 37:3" },
  { texto: "Porque yo sé muy bien los planes que tengo para ustedes, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.", referencia: "Jeremías 29:11" },
  { texto: "No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.", referencia: "Romanos 12:2" },
  { texto: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.", referencia: "1 Corintios 13:4" },
  { texto: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.", referencia: "Filipenses 4:7" },
  { texto: "Dios no nos ha dado un espíritu de cobardía, sino de poder, de amor y de dominio propio.", referencia: "2 Timoteo 1:7" },
  { texto: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.", referencia: "Juan 14:6" },
  { texto: "Porque de tal manera amó Dios al mundo, que nadie se pierda, sino que tenga vida eterna.", referencia: "Juan 3:16" },
  { texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", referencia: "Salmos 119:105" },
  { texto: "El Señor es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar.", referencia: "Salmos 23:1-2" },
  { texto: "Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús.", referencia: "2 Corintios 2:14" },
  { texto: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.", referencia: "2 Timoteo 3:16" },
  { texto: "Pero el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas.", referencia: "Juan 14:26" },
  { texto: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, pensad en estas cosas.", referencia: "Filipenses 4:8" },
];

function getDiaDelAnio(): number {
  const ahora = new Date();
  const inicio = new Date(ahora.getFullYear(), 0, 0);
  const diff = ahora.getTime() - inicio.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getVersiculoDelDia() {
  return VERSICULOS[getDiaDelAnio() % VERSICULOS.length];
}

export function VersiculoDelDia() {
  const [versiculo, setVersiculo] = useState(getVersiculoDelDia);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Calcular ms hasta las 00:01 del día siguiente
    const ahora = new Date();
    const maniana = new Date(ahora);
    maniana.setDate(maniana.getDate() + 1);
    maniana.setHours(0, 1, 0, 0);
    const msHastaMedianoche = maniana.getTime() - ahora.getTime();

    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setVersiculo(getVersiculoDelDia());
        setVisible(true);
      }, 600);
    }, msHastaMedianoche);

    return () => clearTimeout(timeout);
  }, [versiculo]);

  return (
    <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-church relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-10 bg-accent/60" />
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <p className="text-accent font-semibold text-xs tracking-widest uppercase">
                Mensaje del Día
              </p>
            </div>
            <div className="h-px w-10 bg-accent/60" />
          </div>

          {/* Versículo */}
          <AnimatePresence mode="wait">
            {visible && (
              <motion.div
                key={versiculo.referencia}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                {/* Comillas decorativas */}
                <span className="block text-accent/30 text-8xl font-serif leading-none mb-2 select-none">
                  "
                </span>

                <p className="text-white text-xl sm:text-2xl lg:text-3xl font-serif italic leading-relaxed mb-6">
                  {versiculo.texto}
                </p>

                <p className="text-accent font-semibold text-sm tracking-wide">
                  — {versiculo.referencia}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
