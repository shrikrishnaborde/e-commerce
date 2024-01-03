import styled from 'styled-components';

const Loadingspinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}`

  const Spinnercontainer = styled.div`
    padding:8rem;
    display: flex;
    justify-content: center;
  `

function Loader() {
  return (
    // Position styles for Loading wheel
    <Spinnercontainer>
      {/* Spinner styles */}
      <Loadingspinner/>
    </Spinnercontainer>
  )
}

export default Loader



