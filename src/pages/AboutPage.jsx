/* function AboutPage() {
  return (
    <section className="page">
      <h1>Om os</h1>
      <p>Denne side fortæller om vores virksomhed og værdier.</p>
    </section>
  );
}

export default AboutPage; */

// ------ Mere moderne måde at kode på ------

export default function AboutPage() {
    return(
        <section className="page">
            <h1>Om Os</h1>
            <p>Denne side fortæller om vores virksomhed og værdier.</p>
        </section>
    )

}