const LeftSideBar: React.FC = () => {
  return (
    <div>
      <div className="leftHeader">
        <input type="text" />
        <div>
          <button>Search</button>
          <button>Home</button>
        </div>
      </div>
      <div className="leftWeatherContent">
        <img src="" alt="" />
        <div>
          <h1>-10</h1>
          <p>Moscow, RU</p>
          <p>Thusday 14:53</p>
        </div>
        <div className="line"></div>
        <div>
          <div>
            <img src="" alt="" />
            <p>Clouds - 90%</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Ligth rain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
