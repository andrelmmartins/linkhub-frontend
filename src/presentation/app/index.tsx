import Button from "../../components/Button";

import Header from "../../components/Header";
import Window from "../../components/Window";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Page() {

    const { signOut } = useAuthContext()

    return (
        <Window>
            <Header bottomLine justify={[ 'center', 'center', 'space-between' ]}>
                <Button onClick={signOut}>Sair</Button>
            </Header>
        </Window>
    )
}