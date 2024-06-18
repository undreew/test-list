import React from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {Form, FormGroup, Button, Spinner, Input, Label} from 'reactstrap';

function CreateModal({isOpen, onToggle, onSubmit, isSubmitting}) {
	function handleToggle() {
		if (!isSubmitting) onToggle();
	}

	return (
		<Modal centered isOpen={isOpen} toggle={handleToggle}>
			<ModalHeader tag='h4' toggle={handleToggle}>
				Create User
			</ModalHeader>

			<Form onSubmit={onSubmit}>
				<ModalBody>
					<FormGroup>
						<Label>First Name</Label>
						<Input name='first_name' />
					</FormGroup>

					<FormGroup>
						<Label>Last Name</Label>
						<Input name='last_name' />
					</FormGroup>
				</ModalBody>

				<ModalFooter>
					<Button outline onClick={onToggle} disabled={isSubmitting}>
						Cancel
					</Button>

					<Button type='submit' disabled={isSubmitting}>
						{isSubmitting ? <Spinner size='sm' /> : 'Create'}
					</Button>
				</ModalFooter>
			</Form>
		</Modal>
	);
}

export default CreateModal;
