import { SobreProvider } from "./sobre";
import { ModuleProvider } from "./modules";
import { ContactProvider } from "./contact";

const Providers = ({children}) => {
    return <ModuleProvider>
             <SobreProvider>
                <ContactProvider>

                 {children}
                </ContactProvider>
            </SobreProvider>
        </ModuleProvider>
}

export default Providers