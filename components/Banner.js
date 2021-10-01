
export default function Banner() {
  return (
    <section>
      <div className="p-5 flex-col space-y-4">
        <h2 className="text-base text-skin-primary font-bold tracking-wide">Bonjour, I'm Emeric.</h2>
        <h3 className="text-skin-inverted text-4xl font-bold">I build amazing web & mobile experiences.</h3>
        <p className="tracking-wide">
          I'm an experienced front-end developer (and occasionnaly designer). I'm currently building a payment platform at 
          <a href="https://tapaar.com" className="text-skin-primary"> Tapaar</a>.
        </p>
      </div>

      <div className="ml-5 mt-10">
        <a href="#" className="px-4 py-3 text-skin-inverted font-bold rounded border-2 border-skin-inverted hover:bg-skin-btn-inverted hover:text-white transform hover:scale-70 transition duration-500">
          See my work!
        </a>
      </div>

      <div className="my-20"></div>

    </section>
  );
}
