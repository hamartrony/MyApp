import { SobreProvider } from "./sobre";
import { ModuleProvider } from "./modules";
import { ContactProvider } from "./contact";
import { FormacaoProvider } from "./formação";
import { ProjectProvider } from "./projetos";

const Providers = ({children}) => {
    return <ModuleProvider>
             <SobreProvider>
                <ContactProvider>
                    <FormacaoProvider>
                        <ProjectProvider>

                        {children}
                        </ProjectProvider>
                    </FormacaoProvider>
                </ContactProvider>
            </SobreProvider>
        </ModuleProvider>
}

export default Providers