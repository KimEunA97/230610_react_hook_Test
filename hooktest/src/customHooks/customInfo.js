import useInputs from "./useInputs";

const CustomInfo = () => {

  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input value={name} onChange={onChange}></input>
        <input value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름</b> {name}
        </div>
        <div>
          <b>닉네임</b> {nickname}
        </div>
      </div>
    </div>
  )
}

export default CustomInfo;