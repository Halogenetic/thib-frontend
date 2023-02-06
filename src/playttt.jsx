import App from "./ttt/App"


const playttt = () => {
;

  return (
    <>
        <div id="lobby" className="w-[85%] h-[80%] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
                <App />
            </div>
        </div>
    </>
  );
};

export default playttt;