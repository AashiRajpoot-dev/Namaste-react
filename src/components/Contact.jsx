const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact us page</h1>
      <form>
      <label htmlFor="name1">name</label>
        <input id="name1" type="text" className="border border-black p-2 m-2" placeholder="name" />
        <label>message</label>
        <input type="text" className="border border-black p-2 m-2" placeholder="message" />
        <button className="border border-black p-2 m-2 bg-gray-500 rounded-lg text-white cursor-pointer">submit</button>
      </form>
    </div>
  );
};

export default Contact;
