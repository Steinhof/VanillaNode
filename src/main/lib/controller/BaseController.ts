abstract class BaseController<T, V> {
    protected constructor(protected readonly req: T, protected readonly res: V) {}
}

export default BaseController;
