import { Api } from "../ApiCinfig";
import { ApiException } from "../ApiExceptions";

 export interface ITarefa {
    id: number
    title: string;
    isCompleted: boolean;
}

const getall = async (): Promise<ITarefa[] | ApiException> => { 
    try {
        const { data } = await Api().get("/tarefas"); 
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao consultar a API." );
    }

};

const getById = async (id: number): Promise<ITarefa | ApiException> => { 
    try {
        const { data } = await Api().get(`/tarefas/${id}`); 
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao consultar a API." );
    }

};

const create = async (dataToCreate: Omit<ITarefa, "id">): Promise<ITarefa | ApiException> => { 
    try {
        const { data } = await Api().post<any>("/tarefas", dataToCreate); 
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao criar a API." );
    }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => { 
try {
    const { data } = await Api().put(`/tarefas/${id}` , dataToUpdate); 
    return data;
} catch (error: any) {
    return new ApiException(error.message || "Erro ao atualizar a API." );
}

};

const deleteById = async (id: string): Promise<undefined | ApiException> => { 
try {
    const { data } = await Api().get(`/tarefas/${id}`); 
    return undefined;
} catch (error: any) {
    return new ApiException(error.message || "Erro ao apagar a API." );
}

};

export const TarefasService = {
    getall,
    getById,
    create,
    updateById,
    deleteById
};