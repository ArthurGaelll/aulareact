import { useCallback, useEffect, useState } from "react";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasServices";
import { ApiException } from "../../shared/services/api/ApiExceptions";



export const Dashboard = () => {

    const [lista, setLista] = useState<ITarefa[]>([

    ]);

    useEffect(() => {
        TarefasService.getall()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message)
                } else {
                    setLista(result);
                }
            });
    }, []);


    // const handleToggleSelected = useCallback((title: string) => {
    //     setLista(oldLista => oldLista.map(item => {
    //         if (item.title === title) {
    //             return { ...item, isCompleted: !item.isCompleted };
    //         }
    //         return item;
    //     }));
    // }, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {

        if (e.key === "Enter") {
            if (e.currentTarget.value.trim().length === 0) return;
            const value = e.currentTarget.value;
            e.currentTarget.value = "";

            if (lista.some((item) => item.title === value)) return

            TarefasService.create({ title: value, isCompleted: false, })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message)
                    } else {
                        setLista((oldlista) => {
                            return [
                                ...oldlista,
                                result

                            ];
                        });
                    }

                });

        }
    }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;
        TarefasService.updateById(id, {...tarefaToUpdate, isCompleted: !tarefaToUpdate.isCompleted,})
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldlista => {
                        return oldlista.map(oldlistaitem => {
                            if (oldlistaitem.id === id) return result;
                            return oldlistaitem;
                                
                            

                        })
                    })
                }
            })


    }, [lista])

    return (
        <div>
            <input onKeyDown={handleInputKeyDown} placeholder="Adicionar item..." />

            <p>Quantidade selecionados: {lista.filter(i => i.isCompleted).length}</p>

            <ul>
                {lista.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.isCompleted}
                            onChange={() => handleToggleComplete(item.id)}
                        />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}