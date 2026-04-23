"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROMESAS = [
  { versiculo: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.", referencia: "Jeremías 33:3" },
  { versiculo: "El Señor está cerca de los que le invocan, de todos los que le invocan de verdad.", referencia: "Salmos 145:18" },
  { versiculo: "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios.", referencia: "Filipenses 4:6" },
  { versiculo: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.", referencia: "Mateo 7:7" },
  { versiculo: "Si mi pueblo, que lleva mi nombre, se humilla y ora, y me busca y abandona su mala conducta, yo lo escucharé desde el cielo.", referencia: "2 Crónicas 7:14" },
  { versiculo: "Y la oración de fe salvará al enfermo, y el Señor lo levantará.", referencia: "Santiago 5:15" },
  { versiculo: "El Señor ha escuchado mi ruego; el Señor ha recibido mi oración.", referencia: "Salmos 6:9" },
  { versiculo: "Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia.", referencia: "Proverbios 3:5" },
  { versiculo: "Por eso les digo: Todo lo que pidan en oración, crean que lo recibirán, y se les concederá.", referencia: "Marcos 11:24" },
  { versiculo: "Orad sin cesar.", referencia: "1 Tesalonicenses 5:17" },
  { versiculo: "Echa tu carga sobre el Señor, y él te sustentará.", referencia: "Salmos 55:22" },
  { versiculo: "Y esta es la confianza que tenemos en él: que si pedimos alguna cosa conforme a su voluntad, él nos oye.", referencia: "1 Juan 5:14" },
  { versiculo: "Vosotros no tenéis, porque no pedís.", referencia: "Santiago 4:2" },
  { versiculo: "El Señor escucha a los justos, y atiende a su clamor.", referencia: "Salmos 34:17" },
  { versiculo: "Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro.", referencia: "Hebreos 4:16" },
  { versiculo: "En mi angustia clamé al Señor, y él me respondió.", referencia: "Salmos 120:1" },
  { versiculo: "El Señor ha oído mi oración, el Señor recibirá mi ruego.", referencia: "Salmos 6:9" },
  { versiculo: "Busqué al Señor, y él me oyó, y me libró de todos mis temores.", referencia: "Salmos 34:4" },
  { versiculo: "Invoca mi nombre en el día de la angustia; te libraré, y tú me honrarás.", referencia: "Salmos 50:15" },
  { versiculo: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.", referencia: "Isaías 41:10" },
  { versiculo: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", referencia: "Salmos 91:1" },
  { versiculo: "Antes que clamen, yo les responderé; mientras aún estén hablando, yo los escucharé.", referencia: "Isaías 65:24" },
  { versiculo: "La oración eficaz del justo puede mucho.", referencia: "Santiago 5:16" },
  { versiculo: "Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá la puerta.", referencia: "Lucas 11:9" },
  { versiculo: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", referencia: "Salmos 46:1" },
  { versiculo: "Mis ojos están vueltos hacia el Señor, pues él sacará mis pies de la red.", referencia: "Salmos 25:15" },
  { versiculo: "En Dios está mi salvación y mi gloria; en Dios está mi roca fuerte y mi refugio.", referencia: "Salmos 62:7" },
  { versiculo: "Cercano está el Señor a los quebrantados de corazón; y salva a los contritos de espíritu.", referencia: "Salmos 34:18" },
  { versiculo: "¿Está alguno entre vosotros afligido? Haga oración.", referencia: "Santiago 5:13" },
  { versiculo: "La paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.", referencia: "Filipenses 4:7" },
  { versiculo: "Y todo lo que pidiereis en oración, creyendo, lo recibiréis.", referencia: "Mateo 21:22" },
  { versiculo: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza.", referencia: "Salmos 62:5" },
  { versiculo: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", referencia: "Mateo 11:28" },
  { versiculo: "Si permanecéis en mí, y mis palabras permanecen en vosotros, pedid todo lo que queréis, y os será hecho.", referencia: "Juan 15:7" },
  { versiculo: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene del Señor.", referencia: "Salmos 121:1-2" },
  { versiculo: "El Señor te bendiga y te guarde. El Señor haga resplandecer su rostro sobre ti.", referencia: "Números 6:24-25" },
  { versiculo: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.", referencia: "Isaías 26:3" },
  { versiculo: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios.", referencia: "Filipenses 4:6" },
  { versiculo: "Y de igual manera el Espíritu nos ayuda en nuestra debilidad; pues qué hemos de pedir como conviene, no lo sabemos, pero el Espíritu mismo intercede por nosotros.", referencia: "Romanos 8:26" },
  { versiculo: "Deléitate asimismo en el Señor, y él te concederá las peticiones de tu corazón.", referencia: "Salmos 37:4" },
];

function getDiaDelAnio(): number {
  const ahora = new Date();
  const inicio = new Date(ahora.getFullYear(), 0, 0);
  return Math.floor((ahora.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
}

function getPromesasDelDia() {
  const dia = getDiaDelAnio();
  const total = PROMESAS.length;
  return [
    PROMESAS[dia % total],
    PROMESAS[(dia + 13) % total],
    PROMESAS[(dia + 27) % total],
  ];
}

export function PromesasOracion() {
  const [promesas, setPromesas] = useState(getPromesasDelDia);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ahora = new Date();
    const maniana = new Date(ahora);
    maniana.setDate(maniana.getDate() + 1);
    maniana.setHours(0, 1, 0, 0);
    const msHastaMedianoche = maniana.getTime() - ahora.getTime();

    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setPromesas(getPromesasDelDia());
        setVisible(true);
      }, 400);
    }, msHastaMedianoche);

    return () => clearTimeout(timeout);
  }, [promesas]);

  return (
    <div className="space-y-4">
      <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-5">
        Promesas de Dios
      </p>

      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={promesas[0].referencia}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {promesas.map((p, i) => (
              <motion.div
                key={p.referencia}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-primary/5 border border-primary/10 rounded-xl p-4"
              >
                <blockquote className="text-sm text-foreground leading-relaxed italic font-medium">
                  &ldquo;{p.versiculo}&rdquo;
                </blockquote>
                <p className="text-accent text-xs font-bold mt-2">— {p.referencia}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contacto directo */}
      <div className="mt-6 bg-secondary rounded-xl p-5 border border-border">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
          ¿Preferís hablar con alguien?
        </p>
        <p className="text-sm text-foreground font-medium mb-3">
          Nuestro equipo pastoral está disponible para acompañarte.
        </p>
        <a
          href="tel:+56900000000"
          className="text-accent font-bold text-sm hover:underline"
        >
          +56 9 0000 0000
        </a>
        <p className="text-xs text-muted-foreground mt-1">
          Lunes a viernes, 10:00 – 18:00 hrs
        </p>
      </div>
    </div>
  );
}
