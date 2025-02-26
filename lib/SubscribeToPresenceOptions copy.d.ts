import { RealtimePresenceState } from "@supabase/supabase-js";
type Presence<T extends {
    [key: string]: any;
} = {}> = {
    presence_ref: string;
} & T;
export default interface SubscribeToPresenceOptions<T extends {
    [key: string]: any;
}> {
    channel: string;
    onSync: (state: RealtimePresenceState<T>) => void;
    onJoin?: (key: string, newPresences: Presence<T>[]) => void;
    onLeave?: (key: string, leftPresences: Presence<T>[]) => void;
}
export {};
//# sourceMappingURL=SubscribeToPresenceOptions%20copy.d.ts.map