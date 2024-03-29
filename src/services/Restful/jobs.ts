import { Http } from "../Http"
export const JobService = {
    getJobs: async (params: IJobSearchParams): Promise<IJob[]> => {
        try {
            let res: IJobsResponse;
            res = await Http.Request<IJobsResponse>('GET', '/listJobs', params, null);
            return res.data;
        } catch (err) {
            console.log(err);
            throw new Error;
        }
    },
    getJob: async (params: IJobDetailRequest): Promise<IJob> => {
        try {
            let res: IJobDetailResponse;
            res = await Http.Request<IJobDetailResponse>('GET', '/job', params, null);
            return res.data;
        } catch (err) {
            console.log(err);
            throw new Error;
        }
    }
}