
        document.getElementById('subscribe-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = form.querySelector('#submit-btn');
            const statusMsg = form.querySelector('#form-status');
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';
            
            try {
                const formData = new FormData(form);
                const response = await fetch(form.action + '&c=?', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });
                
                statusMsg.style.display = 'block';
                statusMsg.style.color = 'var(--secondary)';
                statusMsg.textContent = 'Thanks for subscribing!';
                form.reset();
            } catch (error) {
                statusMsg.style.display = 'block';
                statusMsg.style.color = 'red';
                statusMsg.textContent = 'Something went wrong. Please try again.';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Subscribe Now';
            }
        });
