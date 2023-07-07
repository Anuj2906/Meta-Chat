// export default function User()
// {
//     return(
//         <div className="flex bg-gray border rounded mx-1 my-1 justify-content-center">
//             The Boys
//         </div>
//     );
// }
import Button from 'react-bootstrap/Button';

function Group() {
  return (
    <div className="d-grid gap-2">
      <Button variant="secondary" size="sm" className="bg-dark mt-2 mb-3 text-muted">
        The Boys
      </Button>
    </div>
  );
}

export default Group;