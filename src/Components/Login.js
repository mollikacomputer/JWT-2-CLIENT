import React from 'react';

const Login = () => {
    return (
        <div>
            <h2 className='text-3xl' > Login</h2>
            <form>
            <input type="email" name='email' placeholder="email" class="input input-bordered w-full max-w-xs" /><br/><br/>
            <input type="password" name='password' placeholder="email" class="input input-bordered w-full max-w-xs" /><br/><br/>
            <input type="submit" className='btn' value="Add User" />
            </form>
        </div>
    );
};

export default Login;