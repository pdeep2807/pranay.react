import Student from "./Student";
function ParentProp() {
  return (
    <div>
      <Student name="panay" age="25" isStudent={true} />
      <Student name="manobi" age={24} isStudent={false} />
    </div>
  );
}
export default ParentProp;
